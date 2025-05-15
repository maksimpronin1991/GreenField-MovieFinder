import React from 'react';
import styles from './search-screen.module.css'
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Количество видимых слайдов
        slidesToScroll: 1,
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
                        <li className="navigationItem"><a href="" className="navugationLink">Home</a></li>
                        <li className="navigationItem"><a href="" className="navugationLink">All Movie</a></li>
                        <li className="navigationItem"><a href="" className="navugationLink">Log out</a></li>
                    </ul>
                </nav>
            </div>

            {/* Секция Previously Watched */}
            <div className={styles.bottomContainer}>
                <section className={styles.section}>
                    <div className="sortContainer">
                        <label htmlFor="sort-options">sort by:</label>
                        <select id="sort-options">
                            <option value="premier-date">premier-date</option>
                            <option value="IMDB Rating">IMDB Rating</option>
                            <option value="numerical">number of views</option>
                        </select>
                    </div>
                    <Slider {...settings}>
                        {moviePosters.map((poster, index) => (
                            <div key={index}>
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

export default SearchScreen;