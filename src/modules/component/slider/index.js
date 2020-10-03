import React, { useEffect, useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { apiEndPoint } from '../../../core/services';
import './slider.css';

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const fetchSliderItems = async () => {
        const requestOptions = {
            method: "POST",
            headers: new Headers({ enctype: "multipart/form-data" }),
            body: {}
        };
        fetch(apiEndPoint + "web/getHomeSlider", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.data);
                },

                (error) => {
                    setError(error);
                }
            )
    }

    useEffect(() => {
        fetchSliderItems();
    }, []);

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <img src={apiEndPoint + item.image} alt="shopmax-slides" />
                <div className="slide-details-wrapper">
                    <div className="slide-short-description" >
                        {item.sort_description}
                    </div>
                    <div className="slide-title" >
                        {item.title}
                    </div>
                </div>
            </CarouselItem>
        );
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    }else {

        return (
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        );
    }
}

export default Slider;