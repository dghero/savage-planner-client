import React from 'react';
import App from '../App';
import {shallow, mount} from 'enzyme';

describe('<App />', () =>{

  it('Should render without crashing', () =>{
		const wrapper = shallow(<App />);
		//console.log(wrapper.debug());
	});

});