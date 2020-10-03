import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { apiEndPoint } from '../../../core/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './menu.css'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(false);

    const fetchCategoryMenu = async () => {
        const requestOptions = {
            method: "POST",
            headers: new Headers({ enctype: "multipart/form-data" }),
            body: {}
        };
        fetch(apiEndPoint + "web/getMenuCategory", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setMenu(result.data);
                },

                (error) => {
                    setError(error);
                }
            )
    }

    useEffect(() => {
        fetchCategoryMenu();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }else {
        return (
            <Container fluid={true} className="menuWrapper">
                <Row >
                    <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                    {
                        menu.map((d, i) => {
                            return (
                                <Col key={d.id}>
                                    <span>{d.name}</span>
                                    <FontAwesomeIcon icon={faCaretDown} className="menuIcon" />
                                </Col>

                            )
                        })
                    }
                    <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
                </Row>
            </Container>
        )
    }
}
export default Menu;