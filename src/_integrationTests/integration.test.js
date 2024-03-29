import React from 'react';
import moxios from 'moxios'

import {testStore} from '../../Utils';
import {fetchPosts} from '../actions';
import { request } from 'http';

describe('fetchPost action test',()=>{

    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });
    
    test('Store is updated correctly',()=>{

        const expectedState = [{
            title: 'Example Title 1',
            body: 'Some text'
        },
        {
            title: 'Example Title 2',
            body: 'Some text'
        },
        {
            title: 'Example Title 3',
            body: 'Some text'
        }]
        const store = testStore();
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });
        return store.dispatch(fetchPosts())
            .then(()=>{
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })   

    });

});