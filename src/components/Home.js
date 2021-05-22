import React from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <h1>Car Dealing Experience. Redefined</h1>
            <Footer />
        </React.Fragment>
    );
}