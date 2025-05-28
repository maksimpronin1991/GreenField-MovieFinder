import { Link } from "react-router-dom";
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.topContainer}>
            {/* Заголовок */}
            <Link to="/home"><h1 className={styles.title}>The<br />Movie<br /> Tracker</h1></Link>

            {/* Поисковая строка */}
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search a movie or a series" className={styles.searchInput} />
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li className="navigationItem"><Link to="/searchScreen" className="navugationLink">All Movie</Link></li>
                    <li className="navigationItem"><Link to="/home" className="navugationLink">Home</Link></li>
                    <li className="navigationItem"><Link to="/" className="navugationLink">Log out</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;