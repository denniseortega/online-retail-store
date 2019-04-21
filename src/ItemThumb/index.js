import React from 'react';
import PropTypes from 'prop-types';

const ItemThumb => {
    return (
        <div className={props.classes}>
            <img src={props.src} alt={props.alt} title={props.title} />
        </div>
    );
};

ItemThumb.propTypes = {
    alt: PropTypes.string,
    title: PropTypes.string,
    classes: Proptypes.string,
    src: Proptypes.string.isRequired
};

export default ItemThumb;