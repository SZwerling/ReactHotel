import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderRoom({room}) {
    return (
        <Card>          
            <CardImg width="100%" src={room.src} alt={room.altText} />
            <CardBody>{room.caption}</CardBody>
        </Card>
    )         
}                




function AboutUs(props) {

    const directory = props.rooms.map(room => {
        return (
            <div key={room.src} className="col-md-5 m-1">
                <RenderRoom room={room} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}


export default AboutUs;