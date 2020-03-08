import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';


class oneImage extends Component {

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
            <span className={this.isPhone()?"row w-100":"row"}>
                <div className="hover-shine column pointer">
                        <div>
                            <figure>
                                <img src={this.props.image} className="col-sm-12 img-radius img-fluid py-2" alt="Responsive image"
                                     onClick={((e) => this.doThing())}
                                />
                            </figure>
                        </div>
                    </div>
                    </span>
        )
    }

}

export default withRouter(oneImage);
