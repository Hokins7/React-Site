import React, { Component } from 'react';
import { Row, Col, Media, Card, ListGroup } from "react-bootstrap";
import BlogImg1 from '../assets/blog-img.jpg';
import BlogImg2 from '../assets/blog-img2.jpg';
import BlogImg3 from '../assets/blog-img3.jpg';
import BlogImg4 from '../assets/blog-img4.jpg';
import BlogImg5 from '../assets/blog-img5.jpg';

class BlogComponents extends Component {
    render() {
        return (
            <Row className="Blogs">
                    <Col md="9">
                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={BlogImg1}
                                alt="img"
                            />
                            <Media.Body>
                                <h5>Australia dog rescue</h5>
                                <p>
                                    We have a duty of care for each animal we take in as well as our carers, volunteers and the public. The only circumstances for euthanasia
                                    in our rescue is if the dog is considered mentally, or physically unsound, and this is only after professional advice from both a Qualified
                                     Dog trainer/behaviours AND a practicing Veterinarian.
                            </p>
                            </Media.Body>
                        </Media>

                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={BlogImg2}
                                alt="img"
                            />
                            <Media.Body>
                                <h5>Donkey rescue</h5>
                                <p>
                                    Donkeys are hardy animals, domesticated by communities around the world, which often exploit these hard working creatures. The Donkey Sanctuary,
                                    established in the UK, works with many countries to help sensitise the owners of these beasts of burden.
                            </p>
                            </Media.Body>
                        </Media>

                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={BlogImg3}
                                alt="img"
                            />
                            <Media.Body>
                                <h5>Animal rescue in USA</h5>
                                <p>
                                    We are committed to the protection of Alaska’s natural wildlife for its intrinsic value, as well as for the benefit of present and future
                                    generations. We advocate for healthy ecosystems which are ethically and scientifically managed.
                            </p>
                            </Media.Body>
                        </Media>

                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={BlogImg4}
                                alt="img"
                            />
                            <Media.Body>
                                <h5>Wildlife Rapid Rescue Team (WRRT)</h5>
                                <p>
                                    The illegal wildlife trade is one of the biggest threats to wildlife globally. Estimated to be worth more than US $20 billion annually this trade has
                                    escalated from a conservation issue to a worldwide criminal enterprise that is devasting wildlife populations.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className='m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={BlogImg5}
                                alt="img"
                            />
                            <Media.Body>
                                <h5>FOUR PAWS</h5>
                                <p>
                                is a strong, global and independent voice for animals under direct human influence. Our vision is a world where people treat animals with respect, 
                                empathy and understanding. 
                            </p>
                            </Media.Body>
                        </Media>

                    </Col>
                    <Col md="3">
                        <h5 className="text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Animal rescue in Europe</ListGroup.Item>
                                <ListGroup.Item>Animal rescue in USA</ListGroup.Item>
                                <ListGroup.Item>Animal rescue in Middle East</ListGroup.Item>
                                <ListGroup.Item>Animal rescue in Australia</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Site winget</Card.Title>
                                <Card.Text>
                                    Australia bringing injured and homeless animals to medical attention and rehoming them to safe
                                        areas—and for every animal that is rescued, other resources are opened up to help people.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        );
    }
}

export default BlogComponents;