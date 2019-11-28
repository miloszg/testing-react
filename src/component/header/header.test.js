import React from 'react';
import {shallow} from 'enzyme'
import Header from './index';
import {findByTestArr} from '../../../Utils';
const setUp = (props={})=> {
    const component = shallow(<Header {...props}/>);
    return component;
};



describe('Header Component',()=>{

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('should render without error',()=>{
        const wrapper = findByTestArr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('should render a logo',()=>{
        const logo = findByTestArr(component,'logoIMG');
        expect(logo.length).toBe(1);
    })
})
