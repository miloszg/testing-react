import React from 'react'
import App from './App';
import {shallow} from 'enzyme';
import {findByTestArr,testStore} from '../Utils';


const setUp = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App Component',()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState={
            posts: [{
                title: 'title 1',
                body: 'some text'
            },
            {
                title: 'title 2',
                body: 'some text'
            },
            {
                title: 'title 3',
                body: 'some text'
            }]
        }
        wrapper=setUp(initialState);
    });

    it('should render without errors',()=>{
        const component = findByTestArr(wrapper,'appComponent');
        expect(component.length).toBe(1);
    })


});