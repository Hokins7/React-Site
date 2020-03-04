import React, { Component } from 'react';
import Footer from '../Components/Footer';
import {Container} from "react-bootstrap";
import ContactForm from '../Components/ContactForm';

class Contacts extends Component {
    render() {
        return (
            <Container>
                <ContactForm />
                <br /><br /><br />
                <Footer />
            </Container>

        );
    }
}

export default Contacts;