import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';

import {findByTestArr,checkProps} from '../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component',()=>{

    describe("Checking propTypes",()=>{
        it("should not throw a warining",()=>{
            const expectedProps={
                header: 'Test header',
                desc: 'Test desc',
                tempArr:   [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    age: 23,
                    onlineStatus: false
              }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();

        })
    });

    describe('Have props',()=>{

        let wrapper;
        beforeEach(()=>{
            const props={
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper=setUp(props);
        })

        it('should render without error',()=>{
            const component = findByTestArr(wrapper,'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render a h1',()=>{
            const h1=findByTestArr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('should render a desc',()=>{
            const desc=findByTestArr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have NO props',()=>{

        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });
        
        it('should not render',()=>{
            const component = findByTestArr(wrapper, '');
            expect(component.length).toBe(0);
        });
    });
});