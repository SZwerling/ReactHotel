import React from 'react';

function Contact(props) {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1000 React Boulevard<br />
                        Palm Springs, California<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> reacthotel@nucamp.co</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;