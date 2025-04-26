import React from 'react';
import styles from './homeScreen.module.css'

const HomeScreen: React.FC = () => {
    return (
        <div className={styles.homeScreen}>

            <div className={styles.topContainer}>
                {/* Заголовок */}
                <h1 className={styles.title}>The Movie Tracker</h1>

                {/* Поисковая строка */}
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search a movie or a series" className={styles.searchInput}/>
                </div>
            </div>

            <div className={styles.middleContainer}>
                {/* Секция Currently Watching */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Currently Watching</h2>
                    <div className={styles.movieGrid}>
                        <div className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                        </div>
                        <div className={styles.movieCard}>
                            <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                        </div>
                    </div>
                </section>

                {/* Секция Suggested To Watch */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Suggested To Watch</h2>
                    <div className={styles.movieGrid}>
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
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Previously Watched</h2>
                <div className={styles.movieGrid}>
                    <div className={styles.movieCard}>
                        <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                    </div>
                    <div className={styles.movieCard}>
                        <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                    </div>
                    <div className={styles.movieCard}>
                        <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                    </div>
                    <div className={styles.movieCard}>
                        <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.moviePoster} />
                    </div>
                    <div className={styles.movieCard}>
                        <img src="https://via.placeholder.com/150" alt="Movie Poster" className={styles.title} />
                    </div>
                </div>
            </section>

            {/* Нижняя часть экрана */}
            <div className={styles.footer}>
                Built with ❤️ by Elshazii
            </div>
        </div>
    );
};

export default HomeScreen;