import React from 'react';
import styles from '../movie-screen/movie-screen.module.css'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieScreen: React.FC = () => {
    const moviePosters = [
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
        "src/img/Rectangle 39.jpg",
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Количество видимых слайдов
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
                        <h2 className={styles.movieTitle}>The Gray Man</h2>
                        <div className={styles.movieInfo}>
                            <img className={styles.movieImg} src="./src/img/Rectangle 39.jpg" alt="" />
                            <div className={styles.movieText}>
                                <div className={styles.movieTypeContainer}>
                                    <p className={styles.movieType}>Action</p>
                                    <p className={styles.movieType}>Sci-Fi</p>
                                </div>
                                <p className="movieDescription">A thief who steals corporate secrets through
                                    the use of dream-sharing technology is given the inverse task of planting
                                    an idea into the mind of a C.E.O., but his tragic past may doom the project
                                    and his team to disaster.</p>
                                <div className={styles.movieRatingContainer}>
                                    <div className={styles.imbdRating}>
                                        <p className={styles.imbdRatingTitle}>IMDB Rating</p>
                                        <p className={styles.imbdRatingNumber}><span className={styles.ratingNumberBold}>7</span>/10</p>
                                    </div>
                                    <p className={styles.reviewsCount}>10k Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoRight}>
                        <button className={styles.addToWathBtn}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                style={{
                                    marginRight: '8px',
                                    verticalAlign: 'text-bottom',
                                }}
                            >
                                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                            </svg>
                            Add to watchlist
                        </button>
                        <video className={styles.trailer} controls>
                            <source src="/videos/trailer.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </section>
            </div>


            {/* Секция Previously Watched */}
            <div className={styles.bottomContainer}>
                <section className={styles.partsSection}>
                    <div className={styles.seasons}>
                        <h3 className={styles.seasonsTitle}>Seasons</h3>
                        <div className={styles.seasosButtons}>
                            <button className={styles.seasosButton}>1</button>
                            <button className={styles.seasosButton}>2</button>
                            <button className={styles.seasosButton}>3</button>
                            <button className={styles.seasosButton}>4</button>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {moviePosters.map((poster, index) => (
                            <div key={index}>
                                <div className={styles.partCard}>
                                    <img src={poster} alt={`Movie Poster ${index}`} className={styles.moviePoster} />
                                    <p className={styles.partDescription}>Part 1</p>
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