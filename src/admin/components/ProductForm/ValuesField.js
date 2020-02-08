import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';

export class ValuesField extends React.Component {
    constructor(props) {
        super();
        const { handleChangeFieldCount, type } = props;

        this.incrementFieldCount = () => handleChangeFieldCount(type);
        this.decrementFieldCount = index => handleChangeFieldCount(type, index);

        this.list = React.createRef();
    }

    render() {
        const { type, title, fields, fieldType } = this.props;
        return (
            <div className={style['form-item']}>
                <div className={style['form-item-title']}>
                    <span>{title}</span>
                    <button
                        type="button"
                        className={style['form-button']}
                        onClick={this.incrementFieldCount}
                    >
                        Добавить
                    </button>
                </div>
                <ol ref={this.list}>
                    {fields.map((item, index) => (
                        <li key={`value-item${item.id}`} className={style['value-item']}>
                            {fieldType === 'file' ? (
                                <input type={fieldType} name={type} />
                            ) : (
                                <input
                                    type={fieldType}
                                    name={type}
                                    defaultValue={item.value ? item.value : ''}
                                />
                            )}

                            {index !== 0 && (
                                <button
                                    type="button"
                                    onClick={() => this.decrementFieldCount(index)}
                                >
                                    удалить
                                </button>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

ValuesField.propTypes = {
    type: PropTypes.string.isRequired,
    handleChangeFieldCount: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    fieldType: PropTypes.string.isRequired
};
