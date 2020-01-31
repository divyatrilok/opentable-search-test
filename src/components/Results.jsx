import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    restaurantsAction,
    updateCity,
    updateFilter
} from '../actions/restaurantsAction';
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    restaurantsAction: () => dispatch(restaurantsAction()),
    updateCity: (city) => dispatch(updateCity(city)),
    updateFilter: (filter) => dispatch(updateFilter(filter))
})

const styles = {
    wrapper: {
        'marginTop': '50px'
    },
    innerWrapper: {
        'display': 'flex',
        'flexDirection': 'column',
        'minHeight': 600
    },
    heading: {
        'textAlign': 'left'
    },
    disclaimer: {
        'textAlign': 'left',
        'color': '#333',
        'lineHeight': '22px'
    }
}

class Results extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.state;
    }
    render() {
        return (
            <div style={styles.wrapper}>
                {
                    typeof this.props.restaurantsReducer.filteredRestaurants !== "undefined"
                    && this.props.restaurantsReducer.status === 'ERROR' ?
                    <p>Error</p>: 
                    typeof this.props.restaurantsReducer.filteredRestaurants !== "undefined"
                        && this.props.restaurantsReducer.filteredRestaurants.length !== 0 ?
                        (<div style={styles.innerWrapper}>
                            <h2 style={styles.heading}>Repositories for {this.props.restaurantsReducer.city} listed below</h2>
                            <span style={styles.disclaimer}>* The opentable API does not provide cuisine type and rating of the restaurants. So added address and price instead just for display purposes.</span>
                            <Table height="600" onRowSelection={this.onRowSelection}>
                                <TableHeader adjustForCheckbox={false} displaySelectAll={false} displayRowCheckbox={false}>
                                    
                                    <TableRow>
                                        <TableHeaderColumn>
                                            Name
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                            Address
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                            Price
                                        </TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    stripedRows={true}
                                    displayRowCheckbox={false}>
                                    {
                                        this.props.restaurantsReducer.filteredRestaurants.length !== 0 ?
                                            this.props.restaurantsReducer.filteredRestaurants.map((row, index) => {
                                                return (<TableRow hoverable={true} key={row.id} scope="row">
                                                    <TableRowColumn>{row.name}</TableRowColumn>
                                                    <TableRowColumn>{row.address}</TableRowColumn>
                                                    <TableRowColumn>{row.price}</TableRowColumn>
                                                </TableRow>)
                                            }) : <TableRow><TableRowColumn>No restaurants Found</TableRowColumn></TableRow>
                                    }
                                </TableBody>
                            </Table>
                        </div>)
                        : <p>Use the search above to list the restaurants</p>
                }
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Results);
