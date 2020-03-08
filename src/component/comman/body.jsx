import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import ProductHorizontal from "../show-product/product-horizontal"
import ProductVertical from "../show-product/product-vertical"
import ThreeImage from "../show-image/three-image"
import TwoImage from "../show-image/two-image"
import FourImage from "../show-image/four-image"
import OneImage from "../show-image/one-image"
import a from "../../img/a2.jpg"
import d from "../../img/dd.jpg"
import pd from "../../img/pd.jpg"
import sa from "../../img/sa.jpg"
import sf from "../../img/sf.jpg"
import ak from "../../img/ak.jpg"
import dk from "../../img/dk.jpg"
import aaq from "../../img/aaq.jpg"


class body extends Component {

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

    render() {
        return (
            <div className={this.isPhone() ? "container mt-3 body-phone" : "body-style mt-3"}>
                <div className="row justify-content-center ">
                    <ThreeImage
                        imagePack={[a,sf,sa]}
                    />
                    <ProductHorizontal
                        specialPack={{
                                title:"پیشنهاد ویژه",
                                image:d,
                                text:"بهترین کالا ممکن",
                                price:"100,000",}}
                        productPack={{
                                title:"محصولات جدید",
                                id:"1",
                                products:[
                                    {
                                        image:d,
                                        text:"بهترین کالا ممکن",
                                        price:"100,000",
                                    },
                                    {
                                        image:d,
                                        text:"بهترین کالا ممکن",
                                        price:"100,000",
                                    },
                                    {
                                        image:d,
                                        text:"بهترین کالا ممکن",
                                        price:"100,000",
                                    },
                                    {
                                        image:d,
                                        text:"بهترین کالا ممکن",
                                        price:"100,000",
                                    },
                                ],

                            }}
                    />
                    <TwoImage
                        imagePack={[ak,dk]}
                    />
                    <OneImage
                        image={pd}
                    />
                    <ProductVertical
                        productPack={{
                            title:"محصولات جدید",
                            products:[
                                {
                                    image:d,
                                    text:"بهترین کالا ممکن",
                                    price:"100,000",
                                },
                                {
                                    image:d,
                                    text:"بهترین کالا ممکن",
                                    price:"100,000",
                                },
                                {
                                    image:d,
                                    text:"بهترین کالا ممکن",
                                    price:"100,000",
                                },
                                {
                                    image:d,
                                    text:"بهترین کالا ممکن",
                                    price:"100,000",
                                },{
                                    image:d,
                                    text:"بهترین کالا ممکن",
                                    price:"100,000",
                                },
                            ],

                        }}
                    />
                    <FourImage
                        imagePack={[aaq,aaq,aaq,aaq]}
                    />



                </div>
            </div>
        );
    }
}

export default withRouter(body);
