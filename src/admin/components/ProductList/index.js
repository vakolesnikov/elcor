import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProduct } from '../../asyncActions';
import { setSelectedProductId } from '../../actions';
import style from './index.css';

class ProductList extends React.Component {
    render() {
        const { handleRemoveProduct, handleChangeProduct, productList } = this.props;

        return (
            <div className={style['product-list-container']}>
                <h2 className={style.title}>Список товаров</h2>
                <ol className={style['product-list']}>
                    {productList.map(item => (
                        <div key={item._id} className={style['product-item']}>
                            <div className={style['product-information']}>
                                <span className={style['product-name']}>{item.name}</span>
                                <div className={style['product-details']}>
                                    <div>цены: {item.prices.join()}</div>
                                </div>
                            </div>
                            <div className={style['product-controls']}>
                                <Link
                                    className={`material-icons ${style['edit-button']}`}
                                    to="update_product"
                                    onClick={() => handleChangeProduct(item._id)}
                                >
                                    edit
                                </Link>
                                <button
                                    className={`material-icons ${style['delete-button']}`}
                                    type="button"
                                    onClick={() => handleRemoveProduct(item._id)}
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    ))}
                </ol>
                <div className={style['add-product-button']}>
                    <Link to="/add_product">Добавить товар</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    productList: state.productList
});

const mapDispatchToProps = dispatch => ({
    handleRemoveProduct: name => dispatch(removeProduct(name)),
    handleChangeProduct: id => dispatch(setSelectedProductId({ id }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
