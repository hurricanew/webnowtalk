import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";

import './gallery.css'
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Card from "../components/Card/Card.jsx";

import image1 from "../assets/img/bg.jpg";
import image2 from "../assets/img/bg2.jpg";
import image3 from "../assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <Carousel {...settings}>
                            <div>
                                <img
                                    src={image3}
                                    alt="First slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />Yellowstone
                                        National Park, United States
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image2}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />Somewhere Beyond,
                                        United States
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image1}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />Yellowstone
                                        National Park, United States
                                    </h4>
                                </div>
                            </div>
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default SectionCarousel;