import React from 'react';
import styles from './movie-screen.css'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieScreen: React.FC = () => {
    const moviePosters = [
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Количество видимых слайдов
        slidesToScroll: 1,
    };


    return (
        <div className={styles.movieScreen}>

            <div className={styles.topContainer}>
                {/* Заголовок */}
                <h1 className={styles.title}>The<br />Movie<br /> Tracker</h1>

                {/* Поисковая строка */}
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search a movie or a series" className={styles.searchInput} />
                </div>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li className="navigationItem"><a href="" className="navugationLink">Home</a></li>
                        <li className="navigationItem"><a href="" className="navugationLink">All Movie</a></li>
                        <li className="navigationItem"><a href="" className="navugationLink">Log out</a></li>
                    </ul>
                </nav>
            </div>

            <div className={styles.middleContainer}>
                {/* Секция Currently Watching */}
                <section className={styles.infoSection}>
                    <div className={styles.infoLeft}>
                        <h2 className="movieTitle"></h2>
                        <div className="movieInfo">
                            <img className='movieImg' src="" alt="" />
                            <div className="movieText">
                                <div className="movieTypeContainer">
                                    <p className="movieType">Action</p>
                                    <p className="movieType">Sci-Fi</p>
                                </div>
                                <p className="movieDescription">A thief who steals corporate secrets through 
                                    the use of dream-sharing technology is given the inverse task of planting 
                                    an idea into the mind of a C.E.O., but his tragic past may doom the project
                                     and his team to disaster.</p>
                            </div>
                            <div className="movieRatingContainer">
                                <div className="imbdRating">
                                    <p className='imbdRatingTitle'>IMDB Rating</p>
                                    <p className="imbdRatingNumber"><span>star</span><span>number</span>/10</p>
                                </div>
                                <p className='reviewsCount'><span></span>k Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoRight}>
                        <button className='addToWathBtn'>Add to watchlist</button>
                        <video className='trailer' src=""></video>
                    </div>

                </section>
            </div>


            {/* Секция Previously Watched */}
            <div className={styles.bottomContainer}>
                <section className={styles.partsSection}>
                    <Slider {...settings}>
                        {moviePosters.map((poster, index) => (
                            <div key={index} className="slide-wrapper">
                                <div className={styles.partCard}>
                                    <img src={poster} alt={`Movie Poster ${index}`} className={styles.moviePoster} />
                                    <p className="partDescription"></p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </section>
            </div>

            {/* Нижняя часть экрана */}
            <div className={styles.footer}>
                Built with ❤️ by GreenField
            </div>
        </div>

    );
};

export default MovieScreen;