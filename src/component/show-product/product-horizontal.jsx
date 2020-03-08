import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class productHorizontal extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    goRightScroll = () => {
        document.getElementById(this.props.productPack.id).scrollLeft += 823;
    };
    goLeftScroll = () => {
        document.getElementById(this.props.productPack.id).scrollLeft -= 823;
    };
    doThing = () => {
        console.log(1234)
    };

    render() {
        return (
            <div className="row py-2 w-100">
                <div className="col-sm-3 bg-white box-border box-radius-right border-right-0">
                    <h5 className="p-3 border-bottom text-font font-weight-bold border-danger text-center">{this.props.specialPack.title}</h5>
                    <div className="pointer py-3"
                         onClick={((e) => this.doThing())}
                    >
                        <img src={this.props.specialPack.image} className="zoom mx-auto d-block img-radius img-phone" alt="Responsive image"
                             width="230"
                             height="172"/>
                        <div className="container-fluid text-center py-3 border-bottom pointer ">
                            <label className="col-12 text-font text-center pointer">{this.props.specialPack.text}</label>
                            <label className="text-font text-success mb-2 text-center pointer "> تومان </label>
                            <span>{" "}</span>
                            <label className="text-font text-success text-center pointer">{this.props.specialPack.price}</label>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9 bg-white box-border box-radius-left border-left-0">
                    <h5 className="p-3 border-bottom title-font font-weight-bold border-color-dark ">{this.props.productPack.title}</h5>
                    <div className="scrollmenu" id={this.props.productPack.id}>
                        {this.props.productPack.products.map((product) =>
                            <div className="col-sm-4 pointer py-3"
                                 onClick={((e) => this.doThing())}
                            >
                                <img src={product.image} className="zoom mx-auto d-block img-radius img-phone" alt="Responsive image"
                                     width="230" height="172"
                                />
                                <div className="w-space-0 container-fluid text-center py-3 border-bottom pointer ">
                                    <label className="col-12 text-font text-center pointer p">{product.text}</label>
                                    <label
                                        className="text-font text-success mb-2 text-center pointer "> تومان </label>
                                    <span>{" "}</span>
                                    <label className="text-font text-success text-center pointer"> {product.price}</label>
                                </div>
                            </div>
                        )
                        }

                        <span className="carousel-control-prev pointer"
                              onClick={((e) => this.goLeftScroll())}
                        >
                                <span className="fas fa-chevron-left chevron-dark"/>
                            </span>
                        <span className="carousel-control-next pointer"
                              onClick={((e) => this.goRightScroll())}
                        >
                                <span className="fas fa-chevron-right chevron-dark"/>
                            </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(productHorizontal);
