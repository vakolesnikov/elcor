import React from 'react';
import PropTypes from 'prop-types';

export const Select = props => {
    const { options, defaultValue, name, isRequired } = props;

    return (
        <select name={name} defaultValue={defaultValue} required={isRequired}>
            {options.map(({ value, title }) => (
                <option key={title} value={value}>
                    {title}
                </option>
            ))}
        </select>
    );
};

Select.defaultProps = {
    isRequired: false
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    defaultValue: PropTypes.any.isRequired,
    isRequired: PropTypes.bool,
    name: PropTypes.string.isRequired
};
