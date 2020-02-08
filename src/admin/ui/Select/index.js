import React from 'react';
import PropTypes from 'prop-types';

export const Select = props => {
    const { options, defaultValue, name, isRequired, isMultiple, onChange } = props;

    return (
        <select
            name={name}
            defaultValue={defaultValue}
            required={isRequired}
            multiple={isMultiple}
            onChange={e => onChange(e.target.value)}
        >
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
    isMultiple: false,
    onChange: Function.prototype
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    defaultValue: PropTypes.any.isRequired,
    isMultiple: PropTypes.bool,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired
};
