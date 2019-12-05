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


    it('exampleMethod_updatesState Method should update state as expected',()=>{
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatedState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    
    it('exampleMethod_returnsValue Method should return value as expected',()=>{
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatedState();
        const newState = classInstance.exampleMethod_returnsValue(6);
        expect(newState).toBe(7);
    })
});