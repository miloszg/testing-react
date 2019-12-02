import React from 'react';
import {checkProps,findByTestArr} from '../../../Utils/index';
import {shallow} from 'enzyme'
import SharedButton from './index';


describe('SharedButton Component',()=>{
    describe('Checking PropTypes',()=>{
        it('should not throw a warning',()=>{
            const expectedProps ={
                buttonText: 'Example',
                emitEvent: () =>{

                }
            };
            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        })
    
    });

    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                buttonText: 'Example',
                emitEvent: () =>{

                }        
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('should render a button',()=>{
            const button = findByTestArr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

    });
});