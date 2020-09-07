import React from 'react';
import Gallery from './Gallery';
import NavigationDrawer from './NavigationDrawer';

function Home() {

    return (
        <div className="grid-container">
            <header className="header">
                <h1>Imágenes para ti</h1>
            </header>

            <NavigationDrawer />
            <Gallery />

            <footer className="footer">
                <p>Jorge Cáceres &copy;</p>
            </footer>
        </div>
    );
}

export default Home;
