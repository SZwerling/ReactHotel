import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText } from 'reactstrap';
import MyCarousel_1 from './CarouselComponent_1';
import MyCarousel_2 from './CarouselComponent_2';
import MyCarousel_3 from './CarouselComponent_3'




class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
    };

    render() {

        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row row-content">
                        <div className="col-md-5 m-2">
                            <Card>
                                <CardHeader>Rooms</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">Rooms</CardTitle>
                                    <CardText>Enjoy the tranquility of having luxury upon luxury</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <MyCarousel_1 />
                    </div>   
                    <div className="row row-content">
                            <MyCarousel_2 />
                            <div className="col-md-5 m-2">
                            <Card>
                                <CardHeader>Amenities</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">Amentities</CardTitle>
                                    <CardText>Eating yummies and growing tummies</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-5 m-2">
                            <Card>
                                <CardHeader>Nightlife</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">Amentities</CardTitle>
                                    <CardText>Entertainment for all tastes</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <MyCarousel_3 />
                    </div>   
                </div>
            </React.Fragment>
        )
    }
}

export default Home;

