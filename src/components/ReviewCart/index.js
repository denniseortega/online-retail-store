import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewCart extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired
    }
};

render () {
    const { label, classes} = this.props;
    const { selectedItem } = this.StaticRange;

    return (
        <div className = {classes}>
            <label>
                <input 

            </label>
        </div>
    );
}






export default ReviewCart;