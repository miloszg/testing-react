import checkPropTypes from 'check-prop-types';
import {applyMiddleware,createStore} from 'redux';
import rootReducer from '../src/reducers';
import {middlewares} from '../src/createStore';


export const findByTestArr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsError;

};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer,initialState);
};