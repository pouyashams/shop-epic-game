import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class productVertical extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    isPhone = () => {
        return !!(navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/Android/i));
    };

    doThing = () => {
        console.log(1234)
    };

    render() {
        return (
            <div className="row py-2 w-100">
                <div className="col-sm-12 bg-white box-border box-radius-left border-left-0">
                    <h5 className="p-3 border-bottom title-font font-weight-bold border-color-dark ">{this.props.productPack.title}</h5>
                    <div className="row h-product">
                        {this.props.productPack.products.map((product) =>
                            <div className="col-sm-3 pointer py-3"
                                 onClick={((e) => this.doThing())}
                            >
                                <img src={product.image} className="zoom mx-auto d-block img-radius img-phone"
                                     alt="Responsive image"
                                     width="230" height="172"
                                />
                                <div className="w-space-0 container-fluid text-center py-3 border-bottom pointer ">
                                    <label className="col-12 text-font text-center pointer ">{product.text}</label>
                                    <label
                                        className="text-font text-success mb-2 text-center pointer "> تومان </label>
                                    <span>{" "}</span>
                                    <label
                                        className="text-font text-success text-center pointer">{product.price}</label>
                                </div>
                            </div>
                        )}
                        {this.isPhone() ? <span>
                              <span className="carousel-control-prev pointer">
                                <span className="fas fa-chevron-up chevron-dark"/>
                            </span>
                        <span className="carousel-control-next pointer">
                                <span className="fas fa-chevron-down chevron-dark"/>
                            </span>
                        </span> : null
                        }

                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(productVertical);
