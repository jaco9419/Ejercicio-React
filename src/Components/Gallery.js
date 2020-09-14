import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            images: [],
            currentImage: '',
            imagesLimit: 6,
            active: false,
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const url =
            `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 21)}&limit=${this.state.imagesLimit}`;
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error('Error fetching images!');
                }
            })
            .then((images) => {
                this.setState({ images, isLoading: false });
            })
            .catch((error) =>
                this.setState({
                    error,
                })
            );
    }

    // Handle modal

    openModal = (e) => {
        const image = this.state.images.find(
            (image) => e.target.id === image.id
        );
        this.setState({
            currentImage: image,
            active: true,
        });
    };

    closeModal = () => {
        this.setState({
            active: false,
        });
    }

    // Handle Images Limit

    handleImagesLimit = () => {
        this.setState({
            imagesLimit: this.state.imagesLimit + 6,
        });
        setTimeout(() => {
            this.componentDidMount();
        }, 500)
    };

    render() {
        const { error, isLoading, images, currentImage, active } = this.state;

        if (error) {
            return (
                <main className="main">
                    <div className="gallery">
                        <p>{error.message}</p>;
                    </div>
                </main>
            );
        }

        if (isLoading) {
            return (
                <main className="main">
                    <div className="gallery">
                        <p className="loading">Loading...</p>;
                    </div>
                </main>
            );
        }

        return (
            <main className="main">
                <div className="gallery">
                    {images.map((image, i) => (
                        <div
                            className="image-block"
                            id="image-block"
                            key={i}
                        >
                            <img
                                src={image.download_url}
                                alt="gallery-item"
                                onClick={this.openModal}
                                id={image.id}
                            />
                            <div className="img-description">
                                <p>{image.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={active ? "modal-bg modal-active" : "modal-bg"} onClick={this.closeModal}>
                    <div className="modal-image-block">
                        <div className="image-container">
                            <img
                                src={currentImage.download_url}
                                alt="1"
                                id="modal-image"
                            />
                        </div>

                        <div className="modal-img-description">
                            <p>
                                Autor: {currentImage.author} |{' '}
                                <a href={currentImage.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                >Unplash</a>
                            </p>
                            <p>Ancho: {currentImage.width}</p>
                            <p>Alto: {currentImage.height}</p>
                        </div>
                        <span className="modal-close" onClick={this.closeModal}>
                            x
                        </span>
                    </div>
                </div>
                <div className="more-container">
                    <div className="more" onClick={this.handleImagesLimit}>
                        +
                    </div>
                </div>
            </main>
        );
    }
}

export default Gallery;
