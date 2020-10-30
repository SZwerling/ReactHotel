import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Carousel from './CarouselComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Header />
                <Carousel />
                <Footer />
            </div>

        );
    }
}

export default Main;