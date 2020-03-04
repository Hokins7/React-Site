import React, { Component } from 'react';
import Footer from '../Components/Footer';
import BlogsComp from '../Components/BlogComponents';
import { Container } from "react-bootstrap";


class Blog extends Component {
    render() {
        return (
            <Container>
                <BlogsComp />
                <Footer />
            </Container>
        );
    }
}

export default Blog;