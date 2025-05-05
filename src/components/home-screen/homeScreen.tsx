import React from 'react';
import styles from './homeScreen.module.css'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeScreen: React.FC = () => {
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
        <div className={styles.homeScreen}>

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
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Currently Watching</h2>
                    <div className={styles.middleMovieContainer}>
                        <div className={styles.movieCard}>
                            <img src="src\img\Rectangle 39.jpg" alt="Movie Poster" className={styles.moviePoster} />
                        </div>
                        <div className={styles.movieCard}>
                            <img src="src\img\Rectangle 39.jpg" alt="Movie Poster" className={styles.moviePoster} />
                        </div>
                    </div>
                </section>

                {/* Секция Suggested To Watch */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Suggested To Watch</h2>
                    <div className={styles.middleMovieContainer}>
                        <div className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                            <span className={styles.rating}>8.7</span>
                        </div>
                        <div className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                            <span className={styles.rating}>8.7</span>
                        </div>
                        <div className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                            <span className={styles.rating}>8.7</span>
                        </div>
                    </div>
                </section>
            </div>


            {/* Секция Previously Watched */}
            <div className={styles.bottomContainer}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Previously Watched</h2>
                    <Slider {...settings}>
                        {moviePosters.map((poster, index) => (
                            <div key={index} className="slide-wrapper">
                                <div className={styles.movieCard}>
                                    <img src={poster} alt={`Movie Poster ${index}`} className={styles.moviePoster} />
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

export default HomeScreen;