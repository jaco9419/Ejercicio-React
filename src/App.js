import React from 'react';
import userImg from './img/User.svg';
import { BrowserRouter } from 'react-router-dom';
import Gallery from './Components/Gallery';


class App extends React.Component {

    render() {
        // // Handle Menu
        const openMenu = () => {
            document
                .getElementById('navigation-drawer')
                .classList.toggle('nav-open');
        };

        // // Handle Dark mode

        function toggleDarkMode() {
            if (document.querySelector('input[name=theme]').checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.getElementById('modo-nocturno').innerHTML = 'SI';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                document.getElementById('modo-nocturno').innerHTML = 'NO';
            }
        }

        //

        return (
            <BrowserRouter>
                <div className="grid-container">
                    <header className="header">
                        <h1>Imágenes para ti</h1>
                    </header>

                    <aside className="navigation-drawer-wrapper">
                        <div
                            className="navigation-drawer"
                            id="navigation-drawer"
                        >
                            <div className="user">
                                <img src={userImg} alt="user" />
                                <h2>User</h2>
                                <p>
                                    Nocturno: <span id="modo-nocturno">NO</span>
                                </p>
                                <input
                                    type="checkbox"
                                    id="switch"
                                    name="theme"
                                    onChange={toggleDarkMode}
                                />
                                <label htmlFor="switch">Toggle</label>
                            </div>
                            <button className="salir">Cerrar sesión</button>
                            <div id="menu" className="menu" onClick={openMenu}>
                                Menú
                            </div>
                        </div>
                    </aside>

                    <Gallery />

                    <footer className="footer">
                        <p>Jorge Cáceres &copy;</p>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
