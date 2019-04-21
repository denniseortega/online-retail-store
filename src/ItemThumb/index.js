import React from 'react';
import PropTypes from 'prop-types';

const ItemThumb => {
    return (
        <div className={props.classes}>
            <img src={props.src} alt={props.alt} title={props.title} />
        </div>
    );
};

ItemThum.propTypes = {
    
}