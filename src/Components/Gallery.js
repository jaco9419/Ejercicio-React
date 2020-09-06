import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            images: [],
            currentImage: 'https://picsum.photos/id/1003/1181/1772'
        };
        this.openModal = this.openModal.bind(this);
    }
    

    async componentDidMount() {
        this.setState({ isLoading: true })
        const url = 'https://picsum.photos/v2/list?page=1&limit=6';
         fetch(url)
         .then(res => {
             if (res.ok) {
                 return res.json();
             } else {
                 throw Error("Error fetching images!")
             }
            })
         .then(images => {
            this.setState({ images, isLoading: false })
         })
         .catch(error => this.setState({
             error
         }))
    }

    // Handle modal

    openModal(e) {
        document.querySelector('.modal-bg').classList.add('modal-active');
        //document.querySelector('#modal-image').src = e.target.src;
        const image = this.state.images.find(image => e.target.id === image.id
        )
        this.setState({
            currentImage: image
        })
    }

    closeModal() {
        document
            .querySelector('.modal-bg')
            .classList.remove('modal-active');
    }

    //

    render() {

        const { error, isLoading, images, currentImage } = this.state;

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        return (

                    <main className="main">
                        <div className="gallery">
                            {images.map((image) => (
                                <div
                                    className="image-block"
                                    id="image-block"
                                    key={image.id}
                                >
                                    <img
                                        src={image.download_url}
                                        alt="1"
                                        onClick={this.openModal}
                                        id={image.id}
                                    />
                                    <div
                                        className="img-description"
                                        id="image-description"
                                        onClick={this.openModal}
                                    >
                                        <p>
                                            {image.author}
                                            <a href={image.url}>
                                                <i className="fab fa-unsplash"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="modal-bg">
                            <div className="modal-image-block">
                                <div className="image-container">
                                    <img src={currentImage.download_url} alt="1" id="modal-image" />
                                </div>

                                <div className="modal-img-description">
                                    <p>
                                        Autor: Alejandro Escamilla | Cuenta
                                        Unplash:
                                        <a href="https://unsplash.com/photos/yC-Yzbqy7PY">
                                            <i className="fab fa-unsplash"></i>
                                        </a>
                                    </p>
                                    <p>Ancho: 5616</p>
                                    <p>Alto: 3744</p>
                                </div>
                                <span
                                    className="modal-close"
                                    onClick={this.closeModal}
                                >
                                    x
                                </span>
                            </div>
                        </div>
                    </main>

        
        );
    }
}

export default Gallery;