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
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example',
                emitEvent:  mockFunc
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        it('should render a button',()=>{
            const button = findByTestArr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });



        it('should emit callback on click event',()=>{
            const button = findByTestArr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })

    });
});