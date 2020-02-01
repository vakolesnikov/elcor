import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ValuesField } from './ValuesField';
import { Select } from '../../ui/Select';
import { FormItemWrapper } from '../../ui/FormItemWrapper';
import { clearSelectedProductId } from '../../actions';
import { addProduct, updateProduct } from '../../asyncActions';

import style from './index.css';

class ProductForm extends React.Component {
    static propTypes = {
        match: PropTypes.objectOf(PropTypes.any).isRequired
    };

    constructor(props) {
        super(props);

        const { selectedProductId, productList } = props;

        const selectedItem = productList.find(item => item._id === selectedProductId) || {};

        const { name, type, prices, descriptions, options } = selectedItem;

        const option = options ? Object.keys(options)[0] : '';

        const optionValues = options ? options[option] : [];

        this.name = name;
        this.type = type;
        this.option = option;

        const generateInitialStateField = (values = []) => {
            return values.length
                ? values.map(value => ({ value, id: Math.random() }))
                : [{ id: Math.random() }];
        };

        this.optionsForTypes = [
            { value: 'apple', title: 'apple' },
            { value: 'samsung', title: 'samsung' },
            { value: 'xiaomi', title: 'xiaomi' },
            { value: 'accessory', title: 'accessory' }
        ];
        this.optionsForProductOptions = [
            { value: 'memory', title: 'память' },
            { value: 'display', title: 'display' }
        ];
        this.fields = [
            {
                title: 'Значения опции',
                type: 'options',
                fieldType: 'text'
            },
            {
                title: 'Значение цены',
                type: 'prices',
                fieldType: 'text'
            },
            {
                title: 'Описание',
                type: 'descriptions',
                fieldType: 'text'
            },
            {
                title: 'Изображения',
                type: 'images',
                fieldType: 'file'
            }
        ];
        this.state = {
            descriptionsFields: generateInitialStateField(descriptions),
            pricesFields: generateInitialStateField(prices),
            optionsFields: generateInitialStateField(optionValues),
            imagesFields: generateInitialStateField(),
            isSubmitForm: false
        };

        this.valuesData = {
            descriptions: React.createRef(),
            prices: React.createRef(),
            options: React.createRef(),
            images: React.createRef()
        };

        this.form = React.createRef();
    }

    componentWillUnmount() {
        const { handleClearSelectedProductId } = this.props;

        handleClearSelectedProductId();
    }

    changeFieldCount = (field, currentIndex) => {
        const fieldName = `${field}Fields`;

        const currentFields = this.state[fieldName];

        const newFields =
            currentIndex === undefined
                ? [...currentFields, { id: Math.random() }]
                : [
                      ...currentFields.slice(0, currentIndex),
                      ...currentFields.slice(currentIndex + 1)
                  ];

        this.setState({ [fieldName]: newFields });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
            match,
            handleAddProduct,
            handleUpdateProduct,
            selectedProductId,
            handleClearSelectedProductId
        } = this.props;
        handleClearSelectedProductId();
        this.setState({ isSubmitForm: true });

        const formData = new FormData(this.form.current);

        if (match.path === '/add_product') {
            formData.set('_id', Date.now().toString());
            handleAddProduct(formData);
        } else {
            formData.set('_id', selectedProductId);
            handleUpdateProduct(formData);
        }

        this.form.current.reset();
        location.hash = '#/product_list';
    };

    renderSubmitButton = () => {
        const { match } = this.props;
        const isUpdateInterface = match.path === '/update_product';

        return (
            <button type="submit" className={style['form-button']}>
                {isUpdateInterface ? 'Изменить товар' : 'Добавить товар'}
            </button>
        );
    };

    render() {
        return (
            <form id="add-product-form" name="product" onSubmit={this.handleSubmit} ref={this.form}>
                <FormItemWrapper title="Наименование товара">
                    <input type="text" name="name" defaultValue={this.name || ''} required />
                </FormItemWrapper>
                <FormItemWrapper title="Категория">
                    <Select
                        isRequired
                        defaultValue={this.type || this.optionsForTypes[0].value}
                        name="type"
                        options={this.optionsForTypes}
                    />
                </FormItemWrapper>
                <FormItemWrapper title="Наименование Опции">
                    <Select
                        isRequired
                        defaultValue={this.option || this.optionsForProductOptions[0].value}
                        name="optionType"
                        options={this.optionsForProductOptions}
                    />
                </FormItemWrapper>
                {this.fields.map(({ type, title, fieldType }) => (
                    <ValuesField
                        key={type}
                        type={type}
                        fieldType={fieldType}
                        handleChangeFieldCount={this.changeFieldCount}
                        title={title}
                        fields={this.state[`${type}Fields`]}
                        ref={this.valuesData[type]}
                    />
                ))}

                <hr />
                <br />
                {this.renderSubmitButton()}
            </form>
        );
    }
}

const mapStateToProps = state => ({
    selectedProductId: state.selectedProductId,
    productList: state.productList
});

const mapDispatchToProps = dispatch => ({
    handleAddProduct: formData => dispatch(addProduct(formData)),
    handleUpdateProduct: formData => dispatch(updateProduct(formData)),
    handleClearSelectedProductId: () => dispatch(clearSelectedProductId())
});

const ConnectedProductForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductForm);

export default withRouter(ConnectedProductForm);
