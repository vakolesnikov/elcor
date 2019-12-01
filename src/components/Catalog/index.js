import React from 'react';

const Catalog = () => (
    <div className="inner-main container">
        <div className="main-filter">
            <div className="inner-form">
                <h2 className="inner-form-title">Стоимость:</h2>
                <div className="inner-range">
                    <div className="range-circle" />
                    <div className="range-line" />

                    <div className="range-circle range-circle-right" />
                </div>

                <span className="range-text-title">от</span>
                <input className="range-text" type="text" name="" defaultValue="0" />
                <span className="range-text-title range-text-title_mod">до</span>
                <input className="range-text" type="text" name="" defaultValue="15 000" />

                <h2 className="inner-form-title form-title-greed">сетка:</h2>
                <label className="typegreed" htmlFor="typegreed">
                    <input type="radio" name="typegreed" defaultValue="" />
                    <div className="typegreed-circle">
                        <span className="typegreed-text">Адаптивная</span>
                    </div>
                </label>

                <h2 className="inner-form-title form-title-features">особенности:</h2>
                <label className="features_item" htmlFor="features-slider">
                    <input type="checkbox" name="features-slider" defaultValue="" />
                    <div className="features-checkbox">
                        <span className="features-text">Слайдер</span>
                    </div>
                </label>
                <input className="button-form" type="submit" name="open" defaultValue="показать" />
            </div>
        </div>
        <div className="inner-product">
            <div className="inner-form-title inner-filter-title">Сортировать:</div>
            <div className="product-filter">
                <a href="/" className="product-filter-item_active">
                    по цене
                </a>
                <a href="/" className="product-filter-item">
                    по типу
                </a>
                <a href="/" className="product-filter-item">
                    по названию
                </a>
            </div>

            <div className="inner-product-item">
                <div className="inner-product-header clearfix" />
                <img src="css/img/img-sedona.jpg" alt="images" width="360px" height="576px" />
                <div className="product-item-after">
                    <h2 className="item-after-title">Sedona app</h2>
                    <div className="item-after-text">
                        Продуктовый лендинг приложения для iOS и Android
                    </div>
                    <a href="/" className="main-button item-after-button">
                        9 990 руб.
                    </a>
                </div>
            </div>
            <div className="inner-product-item">
                <div className="inner-product-header clearfix" />
                <img src="css/img/img-pink.jpg" alt="images" width="360px" height="576px" />
                <div className="product-item-after">
                    <h2 className="item-after-title">Pink app</h2>
                    <div className="item-after-text">
                        Продуктовый лендинг приложения для iOS и Android
                    </div>
                    <a href="/#" className="main-button item-after-button">
                        9 990 руб.
                    </a>
                </div>
            </div>

            {/* <ul className="page-number-list"> */}
            {/*    <li> */}
            {/*        <a className="page-number-current" href="#"> */}
            {/*            1 */}
            {/*        </a> */}
            {/*    </li> */}
            {/*    <li> */}
            {/*        <a className="page-number" href="#"> */}
            {/*            2 */}
            {/*        </a> */}
            {/*    </li> */}
            {/*    <li> */}
            {/*        <a className="page-number" href="#"> */}
            {/*            3 */}
            {/*        </a> */}
            {/*    </li> */}
            {/*    <li> */}
            {/*        <a className="page-next" href="#"> */}
            {/*            следуюшая */}
            {/*        </a> */}
            {/*    </li> */}
            {/* </ul> */}
        </div>
    </div>
);

export default Catalog;
