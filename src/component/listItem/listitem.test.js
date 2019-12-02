import React from 'react';
import {shallow} from 'enzyme';
import {findByTestArr,checkProps } from '../../../Utils';
import ListItem from './index';

describe('ListItem Component',()=>{
    describe('checking PropTypes',()=>{
        it('should not throw a warning',()=>{
            const expectedProps ={
                title: 'Title',
                desc: 'Some desc'
            };
            const propsError = checkProps(ListItem,expectedProps);
            expect(propsError).toBeUndefined();

        });

    });

    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props ={
                title: 'Title',
                desc: 'Some desc'
            };
            wrapper = shallow(<ListItem {...props}/>)
        });

        it('should render a list',()=>{
            const list = findByTestArr(wrapper,'componentList');
            expect(list.length).toBe(1);

        });

        it('should render a title',()=>{
            const title = findByTestArr(wrapper,'componentTitle');
            expect(title.length).toBe(1);

        });

        it('should render a desc',()=>{
            const desc = findByTestArr(wrapper,'componentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe("Should not render a component",()=>{
        let wrapper;
        beforeEach(()=>{
            const props ={
                desc: 'Some desc'
            };
            wrapper = shallow(<ListItem {...props}/>)
        });

        it('should not render a component',()=>{
            const component= findByTestArr(wrapper,'componentList');
            expect(component.length).toBe(0);
        });

    });



});