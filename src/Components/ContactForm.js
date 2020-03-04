import React, { Component } from 'react';
import { Form, Button, Col, Row } from "react-bootstrap"

class ContactForm extends Component {
    render() {
        return (
            <div className="container-fluid contacts">
            <Row>
                <Col xs={12} md={6} sm={12}>
                    <h1>Contat us</h1>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type='email' placeholdr='Enter Email' />
                            <Form.Text>We'll never share your email with anyone else</Form.Text>
                        </Form.Group >

                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Example textarea:</Form.Label>
                            <Form.Control as='textarea' rows="3" />
                        </Form.Group>

                        <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>

                <Col xs={12} md={6} sm={12} className="text-center">
                    <h2>Your contact to WTG e.V.</h2>
                    <p>Tel.: 49(0)30 – 9237226-0<br/>E-Mail: info@welttierschutz.org</p>
                    <p>Welttierschutzgesellschaft e.V.<br />Reinhardtstr. 10<br />10117 Berlin<br />Germany</p><br />
                    <h5>Account for donations</h5>
                    <p>Bank für Sozialwirtschaft<br />BIC: BFSWDE33XXX<br />IBAN: DE38370205000008042300</p><br />
                </Col>
            </Row>

            <Row>
                <Col>
                    <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606.8850322393964!2d13.385691414978284!3d52.52366103025816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e9e4947c8d%3A0xb3074dcf813f8f21!2zUmVpbmhhcmR0c3RyYcOfZSAxMCwgMTAxMTcgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1583324127091!5m2!1sru!2sua'} className="w-100" height={600} frameborder={0} title='Some tittle' ></iframe>
                </Col>
            </Row>
        </div>
        );
    }
}

export default ContactForm;