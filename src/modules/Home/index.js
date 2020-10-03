import React, { useEffect, useState } from 'react';
import Header from '../layout/header';
import Menu from '../layout/Menu';
import Footer from '../layout/footer';
import Slider from '../component/slider';
import GetHomeProductSlider from '../component/getHomeProductSlider';
import { apiEndPoint } from '../../core/services';
import {  Col, Container, Row } from 'reactstrap';
import { fetchHomeBanners } from '../../core/services';


const Home = () => {
    const [error, setError] = useState(false);
    const [banners, setBanners] = useState([]);
    
    let banners1 = banners.slice(0, 2);
    let banners2 = banners.slice(2, banners.length);
    useEffect(() => {
        fetchHomeBanners(setBanners, setError);
    }, []);



    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <React.Fragment>
                <Header />
                <Menu />
                <Slider />
                <GetHomeProductSlider id="1" title="Electronics Items" />
                <Container>
                    <Row>
                        {
                            banners2.map((d, i) => {
                                return (
                                    <Col key={d.id} >
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "500px",
                                                backgroundImage: "url(" + apiEndPoint + d.image + ")",
                                                backgroundPosition: "center center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                margin: "10px 20px",
                                                position: "relative"
                                            }}
                                        >
                                            <div style={{ position: "absolute", top: "36%", left: "0%", backgroundColor: "rgba(0,0,0,.82)" }}><h6 className="text-white">{d.title}</h6></div>
                                            <div style={{ position: "absolute", top: "40%", left: "0%", backgroundColor: "rgba(0,0,0,.82)" }}><h4 className="text-white">{d.sort_description}</h4></div>
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {
                            banners1.map((d, i) => {
                                return (
                                    <Col key={d.id} >
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "500px",
                                                backgroundImage: "url(" + apiEndPoint + d.image + ")",
                                                backgroundPosition: "center center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                margin: "10px 20px",
                                                position: "relative"
                                            }}
                                        >
                                            <div style={{ position: "absolute", top: "60%", left: "5%", backgroundColor: "rgba(255,255,255,.82)" }}><h6>{d.title}</h6></div>
                                            <div style={{ position: "absolute", top: "64%", left: "5%", backgroundColor: "rgba(255,255,255,.82)" }}><h5>{d.sort_description}</h5></div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
                <GetHomeProductSlider id="5" title="Baby &amp; Kids Items" />
                <GetHomeProductSlider id="3" title="Mens" />
                <GetHomeProductSlider id="2" title="TVs &amp; Appliances" />
                <GetHomeProductSlider id="4" title="Womens" />
                <GetHomeProductSlider id="6" title="Home &amp; Furniture" />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;