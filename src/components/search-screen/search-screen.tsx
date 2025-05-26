import React from 'react';
import styles from './search-screen.module.css'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const SearchScreen: React.FC = () => {
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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        rows: 3,
        slidesPerRow: 6,
    };


    return (
        <div className={styles.searchScreen}>

            <div className={styles.topContainer}>
                {/* Заголовок */}
                <h1 className={styles.title}>The<br />Movie<br /> Tracker</h1>

                {/* Поисковая строка */}
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search a movie or a series" className={styles.searchInput} />
                </div>
                <nav className={styles.navigation}>
                    <ul className={styles.navigationList}>
                        <li className="navigationItem"><Link to="/home" className="navugationLink">Home</Link></li>
                        <li className="navigationItem"><Link to="/" className="navugationLink">Log out</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Секция Previously Watched */}
            <div className={styles.bottomContainer}>
                <section className={styles.section}>
                    <div className={styles.sortContainer}>
                        <label className={styles.sortOptions} htmlFor="sortOptions">Showing search results for </label>
                        <select id="sortOptions">
                            <option value="premier-date">premier-date</option>
                            <option value="IMDB Rating">IMDB Rating</option>
                            <option value="numerical">number of views</option>
                        </select>
                    </div>
                    <Slider {...settings}>
                        {moviePosters.map((poster, index) => (
                            <Link to="/movieScreen" key={index}>
                                <div className={styles.movieCard}>
                                    <img src={poster} alt={`Movie Poster ${index}`} className={styles.moviePoster} />
                                    <div className={styles.cardRating}>8</div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </section>
            </div>

        </div>

    );
};

export default SearchScreen;