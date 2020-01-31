import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { restaurantsAction, updateCity, updateFilter, clearRestaurants } from '../actions/restaurantsAction';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    restaurantsAction: () => dispatch(restaurantsAction()),
    clearRestaurants: () => dispatch(clearRestaurants()),
    updateCity: (city) => dispatch(updateCity(city)),
    updateFilter: (filter) => dispatch(updateFilter(filter))
})

const styles = {
    wrapper: {
        margin: '0 15px'
    }
}

export class Search extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            "city": this.props.restaurantsReducer.city,
            "filter": this.props.restaurantsReducer.filter
        }
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.restaurantsReducer.city !== this.state.city) {
        //   this.setState({ city: nextProps.restaurantsReducer.city });
        // }
        // if (nextProps.restaurantsReducer.filter !== this.state.filter) {
        //     this.setState({ filter: nextProps.restaurantsReducer.filter });
        // }
      }
    handleGetRestaurants = (event) => { 
        if (event.keyCode === 13 || event.target.tagName === 'SPAN') {
            if(this.state.city !== this.props.restaurantsReducer.city){
                this.props.clearRestaurants();
            }
            this.props.updateCity(this.state.city);
            this.props.updateFilter(this.state.filter);
            this.props.restaurantsAction();
        }
    }
    cityChanged = (event, newValue) =>{
        this.setState({
           "city": newValue
        })
    }
    filterChanged = (event, newValue) =>{
        this.setState({
           "filter": newValue 
        })
    }
    render() {
        return (
            <div>
                <TextField
                    id="txtCity"
                    style={styles.wrapper}
                    hintText=""
                    floatingLabelText="Enter City"
                    type="text"
                    value={this.state.city}
                    defaultValue={this.state.city || this.props.restaurantsReducer.city}
                    fullWidth={false}
                    onKeyDown={this.handleGetRestaurants}
                    onChange={this.cityChanged}
                />
                <TextField
                    id="txtFilter"
                    style={styles.wrapper}
                    hintText=""
                    floatingLabelText="Any Filter"
                    type="text"
                    value={this.state.filter}
                    defaultValue={this.state.filter || this.props.restaurantsReducer.filter}
                    disabled = {typeof this.props.restaurantsReducer.restaurants === "undefined"
                    && !this.props.restaurantsReducer.restaurants}
                    fullWidth={false}
                    onKeyDown={this.handleGetRestaurants}
                    onChange={this.filterChanged}
                />
                <RaisedButton
                    style={styles.wrapper}
                    primary={true}
                    label="Search Restaurants"
                    fullWidth={false}
                    disabled = {!this.state.filter && !this.state.city}
                    onClick = {this.handleGetRestaurants} />
                
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);