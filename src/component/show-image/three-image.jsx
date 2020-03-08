import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class threeImage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    doThing = () => {
        console.log(1234)
    };

    isPhone = () => {
        return !!(navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/Android/i));
    };

    render() {
        return (this.isPhone() ? <div className="row w-100">
                        <div className="col-sm-12 ">
                            <div className="scrollmenu" id="container">
                                {this.props.imagePack.map((image) =>
                                    <div className=" pointer py-3 px-3 ">
                                        <img src={image} className="shake-img mx-auto d-block img-radius "
                                             alt="Responsive image"
                                             width="310" height="230"/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> : <div className="gallery" id="gallery">
                        {this.props.imagePack.map((image) =>
                            <div className="mb-3 pics animation"
                                 onClick={((e) => this.doThing())}
                            >
                                <img className="img-fluid shake-img pointer img-radius" src={image} alt="Card image cap"/>
                            </div>
                        )}
                </div>
    )
    }

}

export default withRouter(threeImage);
