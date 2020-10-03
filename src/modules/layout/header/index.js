import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./header.css";

const Header = () => {
    return (
        <Container fluid={true} className="header">
            <Row>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div className="logo" style={{marginBottom:"5px"}}>SHOP <span>MAX</span></div>
                </Col>
                <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                    <input type="text" className="searchBox" placeholder="Search for products,brands and more" />
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                    <div className="rightContianer" style={{marginTop:"15px"}}>
                        <FontAwesomeIcon icon={faUser} className="icon" /><span>Login</span>
                        <FontAwesomeIcon icon={faCartPlus} className="icon" /><span>Cart</span>
                    </div>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
            </Row>
        </Container>
    )
}

export default Header;