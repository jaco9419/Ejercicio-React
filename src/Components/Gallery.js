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
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const url =
            'https://picsum.photos/v2/list?limit=' + this.state.imagesLimit;
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
        document.querySelector('.modal-bg').classList.add('modal-active');
        const image = this.state.images.find(
            (image) => e.target.id === image.id
        );
        this.setState({
            currentImage: image,
        });
    };

    closeModal() {
        document.querySelector('.modal-bg').classList.remove('modal-active');
    }

    // Handle Images Limit

    handleImagesLimit = () => {
        this.setState({
            imagesLimit: this.state.imagesLimit + 6,
        });
        if (this.state.imagesLimit > 6) {
            this.componentDidMount();
        }
        console.log(this.state.imagesLimit);
    };

    render() {
        const { error, isLoading, images, currentImage } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p className="loading">Loading...</p>;
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
                            <div className="img-description">
                                <p>{image.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="modal-bg">
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
                                <a href={currentImage.url}>Unplash</a>
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
