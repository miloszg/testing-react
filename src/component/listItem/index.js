import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component{



    render(){
        const {title,desc} = this.props;

        if(!title){
            return null;
        }
        return(
            <div data-test="componentList">
                <div data-test="componentTitle">
                    <h3>{title}</h3>
                </div>
                <div data-test="componentDesc">
                    {desc}
                </div>
            </div>
            
        );
    }



}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;