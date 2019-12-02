import {types} from '../../actions/types'
import postReducer from './reducer'


describe('Post Reducer',()=>{
    it('should return default state',()=>{
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state id received type',()=>{
        const posts = [
            { title: 'Title 1'},
            { title: 'Title 2'},
            { title: 'Title 3'}
        ]
        const newState = postReducer(undefined,{
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });

});