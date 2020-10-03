import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./footer.css";

const Footer = () => {
    return (
        <Container fluid={true} className="footer">
            <Row>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <div className="footStart">
                        <h5 style={{ marginLeft:"39px"}}>Customer Services</h5>
                        <ul>
                            <li>
                                How to Buy
                        </li>
                            <li>
                                FAQ
                        </li>
                            <li>
                                Payment Methods
                        </li>
                            <li>
                                Shipping
                        </li>
                            <li>
                                Terms &amp; Conditions
                        </li>
                            <li>
                                Privacy Policy
                        </li>
                        </ul>
                    </div>

                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <div className="footMiddle">
                        <h5 style={{marginLeft:"39px"}}>My Account</h5>
                        <ul>
                            <li>
                                Sign In
                        </li>
                            <li>
                                View Cart
                        </li>
                            <li>
                                Contact Us
                        </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <div className="logo">SHOP <span>MAX</span></div>
                    <address>
                        <FontAwesomeIcon icon={faMapMarker} className="icon" />
                        <span>
                            123,ABC Complex,<br />
                            Opp. XYZ Complex,<br />
                            DEF Street, California,USA
                        </span>
                    </address>
                    <p className="text-left text-white" >
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span style={{ marginLeft: "5px" }}>
                            <a href="mailto:info@example.com" className="text-white" target="_blank" rel="noopener noreferrer">info@example.com</a>
                        </span>
                    </p>
                    <p className="text-left text-white" >
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <span style={{ marginLeft: "5px" }}>
                            <a href="tel:+1123456787" className="text-white" target="_blank" rel="noopener noreferrer">+1 123456787</a>
                        </span>
                    </p>

                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>


            </Row>
            <Row className="justify-content-center">
                <p className="foot-line">Copyrights &copy; {new Date().getFullYear()} <span>ShopMax</span>. All Rights Reserved</p>
            </Row>
        </Container>
    )
}

export default Footer;