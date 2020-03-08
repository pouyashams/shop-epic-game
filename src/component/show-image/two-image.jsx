import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class twoImage extends Component {

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
        return (
            <div className="py-3">
                {this.isPhone()?
                    <span className="w-100">
                {this.props.imagePack.map((image) =>

                    <img src={image} className="col-sm-6 img-radius img-fluid py-2" alt="Responsive image"
                         onClick={((e) => this.doThing())}
                    />
                )}
            </span>
                    :
                    <span className="row">
                {this.props.imagePack.map((image) =>

                    <div className="container img-h">
                        <img src={image} alt="Avatar" className="image"/>
                        <div className="overlay"/>
                    </div>

                )}
            </span>
                }
            </div>


        )
    }

}

export default withRouter(twoImage);
