import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MyCarousel from './CarouselComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import ROOMS from './RoomImages';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={MyCarousel} />
                    <Route exact path='/aboutus' render={() => <AboutUs rooms={this.state.rooms} />} />
                    <Route exact path='/contactus' component={Contact} /> 
                    <Redirect to='/home' />
               </Switch>
                <Footer />
            </div>

        );
    }
}

export default Main;