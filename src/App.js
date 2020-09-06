import React from 'react';
import userImg from './img/User.svg'
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    loading: true,
    images: null
  };

  async componentDidMount() {
    const url = "https://picsum.photos/v2/list?page=1&limit=6";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ images: data, loading: false });
    console.log(this.state.images);
  }


  render() { 

  // Handle Menu
  const openMenu = () => {
    document.getElementById('navigation-drawer').classList.toggle('nav-open');
  }

  // Handle modal

  function openModal () {
    document.querySelector('.modal-bg').classList.add('modal-active');
  }

  function closeModal () {
    document.querySelector('.modal-bg').classList.remove('modal-active');
  }

   // Handle Dark mode

   function toggleDarkMode () {
       if (document.querySelector('input[name=theme]').checked) {
           document.documentElement.setAttribute('data-theme', 'dark');
           document.getElementById('modo-nocturno').innerHTML = 'SI';
       } else {
           document.documentElement.setAttribute(
               'data-theme',
               'light'
           );
           document.getElementById('modo-nocturno').innerHTML = 'NO';
       }
   };

   if (this.state.loading) {
    return <div>loading...</div>;
  }

  if (!this.state.images) {
    return <div>didn't get an image</div>;
  }


  return (
    <div className="grid-container">
            <header className="header">
                <h1>Imágenes para ti</h1> 
            </header>
            
            <aside className="navigation-drawer-wrapper">
                <div className="navigation-drawer" id="navigation-drawer">
                    <div className="user">
                        <img src={userImg} alt="user" />
                        <h2>User</h2>
                        <p>Nocturno: <span id="modo-nocturno">NO</span></p>
                        <input type="checkbox" id="switch" name="theme" onChange={toggleDarkMode}/>
                        <label htmlFor="switch">Toggle</label>
                    </div>
                    <button className="salir">Cerrar sesión</button>
                    <div id="menu" className="menu" onClick={openMenu}>Menú</div>
                </div>
            </aside>
            
    
            <main className="main">
                <div className="gallery">

                        {
                          this.state.images.map(image => 
                            <div className="image-block" id="image-block" key={image.id}>
                          <img src={image.download_url} alt="1" />
                          <div className="img-description" id="image-description" onClick={openModal}>
                              <p>{image.width} x {image.height}</p>
                              <p>{image.author} 
                                  <a href={image.url} target="_blank">
                                      <i className="fab fa-unsplash"></i>
                                  </a>
                              </p>
                          </div>
                        </div>
                            )
                        }
   
                </div>

                {
                  this.state.images.map(image =>
                    <div className="modal-bg">
                        <div className="modal-image-block">
                            <img src={image.download_url} alt="1" />
                            <div className="modal-img-description">
                                <p>Autor: Alejandro Escamilla | Cuenta Unplash:
                                    <a href="https://unsplash.com/photos/yC-Yzbqy7PY" target="_blank">
                                        <i className="fab fa-unsplash"></i>
                                    </a>
                                </p>
                                <p>Ancho: 5616</p>
                                <p>Alto: 3744</p>
                            </div>
                            <span className="modal-close" onClick={closeModal}>x</span>
                        </div>
                </div>
                    )
                }

                

                

            </main>
    
            <footer className="footer">
                <p>Jorge Cáceres &copy;</p>
            </footer>
        </div>
  );
                  }
}

export default App;
