import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Badge, Card, CardBody, CardHeader, CardSubtitle, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { apiEndPoint } from '../../../core/services';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Slider = (props) => {
    let data = props.data,
        title = props.title;

    console.log("data",data)
    const items = data.map((d, i) => {
        return (
            <Card xl={4} lg={4} md={4} sm={4} xs={4} key={d.id}>

                <div style={{
                    width: "300px",
                    height: "300px",
                    backgroundImage: "url(" + apiEndPoint + d.images[0].vi_image + ")",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    margin: "10px auto"
                }}></div>
                <CardBody>
                    <div>{d.category_name}</div> 
                    <CardTitle><h6>{d.name}</h6></CardTitle>
                    <CardSubtitle>
                        <Badge color="success">
                            {d.average_ratings}
                            <FontAwesomeIcon icon={faStar} className="icon" style={{ fontSize: "12px" }} />
                        </Badge>
                        <span>({d.total_ratings})</span>
                    </CardSubtitle>

                </CardBody>
            </Card>
        )
    });

    return (
        <Card >
            <CardHeader >
                <h4 style={{ padding: "5px 0px", textAlign: "left" }} >
                    {title}
                </h4> 
                <button type="button" style={{height:"28px" , color:"#ddd" , background:"#2873f0" , marginTop:"-31px",float:"right" , width:"98px"}}>View More</button>
            </CardHeader>
            <CardBody>
                <Carousel responsive={responsive}>
                    {items}
                </Carousel>
            </CardBody>

        </Card>

    )
}
export default Slider;