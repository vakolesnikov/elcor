import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

export const FormItemWrapper = props => {
    const { title, children } = props;

    return (
        <div className={style['form-item']}>
            <div className={style['form-item-title']}>{title}</div>
            {children}
        </div>
    );
};

FormItemWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired
};
