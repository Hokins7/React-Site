import React, { Component } from 'react';
import Carusel from '../Components/Carusel';
import HomeContent from '../Components/HomeContent';
import Footer from '../Components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Carusel />
                <HomeContent />
                <Footer />
            </div>
        );

    }
}

export default Home;