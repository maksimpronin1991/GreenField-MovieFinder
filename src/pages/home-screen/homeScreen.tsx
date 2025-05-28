import styles from './homeScreen.module.css'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

const HomeScreen = () => {
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

            <Header/>

            <div className={styles.middleContainer}>
                {/* Секция Currently Watching */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Currently Watching</h2>
                    <div className={styles.middleMovieContainer}>
                        <Link to="/movieScreen" className={styles.movieCard}>
                            <img src="src\img\Rectangle 39.jpg" alt="Movie Poster" className={styles.moviePoster} />
                        </Link>
                        <Link to="/movieScreen"  className={styles.movieCard}>
                            <img src="src\img\Rectangle 39.jpg" alt="Movie Poster" className={styles.moviePoster} />
                        </Link>
                    </div>
                </section>

                {/* Секция Suggested To Watch */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Suggested To Watch</h2>
                    <div className={styles.middleMovieContainer}>
                        <Link to="/movieScreen"  className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                            <span className={styles.rating}>8.7</span>
                        </Link>
                        <Link  to="/movieScreen" className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                            <span className={styles.rating}>8.7</span>
                        </Link>
                        <Link  to="/movieScreen" className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                            <span className={styles.rating}>8.7</span>
                        </Link>
                    </div>
                </section>
            </div>


            {/* Секция Previously Watched */}
            <div className={styles.bottomContainer}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Previously Watched</h2>
                    <Slider {...settings}>
                        {moviePosters.map((poster, index) => (
                            <Link to="/movieScreen"  key={index}>
                                <div className={styles.movieCard}>
                                    <img src={poster} alt={`Movie Poster ${index}`} className={styles.moviePoster} />
                                </div>
                            </Link>
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