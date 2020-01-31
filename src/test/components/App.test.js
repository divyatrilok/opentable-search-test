import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../../App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Search from '../../components/Search';
import Results from '../../components/Results';
configure({ adapter: new Adapter() })
describe('application renders (Mount + Wrapping in Provider) <app/>', () => {

      it('renders without crashing', () => {
          const div = document.createElement('div');
          ReactDOM.render( <Provider store = {
              store()
            } >
            <App />
            </Provider>, div);
          });
});

//*******************************************************************************************************
describe('all the components on start-up exists', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store()}><App /></Provider>)
  })
  it('+++ contains header - h1', () => {
    let txt = wrapper.find('h1').text()
  	expect(txt).toEqual("React App to talk to Opentable");
  });
  it('+++ render the connected(Search) component', () => {
    expect(wrapper.exists(Search)).toBe(true)
  });
  it('+++ render the connected(Results) component', () => {
    expect(wrapper.exists(Results)).toBe(true)
  });
});
