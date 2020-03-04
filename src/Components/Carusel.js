import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SlideImg1 from "../assets/1.jpg";
import SlideImg2 from "../assets/2.jpg";
import SlideImg3 from "../assets/3.jpg";
import SlideImg6 from "../assets/6.jpg";

class Carusel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SlideImg1}
                        alt="SlideImg1"
                    />
                    <Carousel.Caption>
                        <h3>FOUR PAWS</h3>
                        <p>Is a strong, global and independent voice for animals under direct human influence. Our vision is a world where people treat animals with respect,
                            empathy and understanding. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SlideImg2}
                        alt="SlideImg2"
                    />
                    <Carousel.Caption>
                        <h3>Wildlife Rapid Rescue Team (WRRT)</h3>
                        <p>The illegal wildlife trade is one of the biggest threats to wildlife globally. Estimated to be worth more than US $20 billion annually this trade has
                            escalated from a conservation issue to a worldwide criminal enterprise that is devasting wildlife populations.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SlideImg3}
                        alt="SlideImg3"
                    />
                    <Carousel.Caption>
                        <h3>Animal rescue in USA</h3>
                        <p>We are committed to the protection of Alaska’s natural wildlife for its intrinsic value, as well as for the benefit of present and future
                            generations. We advocate for healthy ecosystems which are ethically and scientifically managed.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SlideImg6}
                        alt="SlideImg6"
                    />
                    <Carousel.Caption>
                        <h3>Animal Rescue 6</h3>
                        <p>We have a duty of care for each animal we take in as well as our carers, volunteers and the public. The only circumstances for euthanasia
                            in our rescue is if the dog is considered mentally.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carusel;