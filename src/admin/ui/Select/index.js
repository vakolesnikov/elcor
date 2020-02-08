import React from 'react';
import PropTypes from 'prop-types';

export const Select = props => {
    const { options, defaultValue, name, isRequired, isMultiple } = props;

    return (
        <select name={name} defaultValue={defaultValue} required={isRequired} multiple={isMultiple}>
            {options.map(({ value, title }) => (
                <option key={title} value={value}>
                    {title}
                </option>
            ))}
        </select>
    );
};

Select.defaultProps = {
    isRequired: false,
    isMultiple: false
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    defaultValue: PropTypes.any.isRequired,
    isMultiple: PropTypes.bool,
    isRequired: PropTypes.bool,
    name: PropTypes.string.isRequired
};
