import { Link } from "react-router-dom";
import styles from './header.module.css'
import { AppRoute } from "../../const";

const Header = () => {
    return (
        <div className={styles.topContainer}>
            {/* Заголовок */}
            <Link to={AppRoute.Home}><h1 className={styles.title}>The<br />Movie<br /> Tracker</h1></Link>

            {/* Поисковая строка */}
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search a movie or a series" className={styles.searchInput} />
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li className="navigationItem"><Link to={AppRoute.SearchScreen} className="navugationLink">All Movie</Link></li>
                    <li className="navigationItem"><Link to={AppRoute.Home} className="navugationLink">Home</Link></li>
                    <li className="navigationItem"><Link to={AppRoute.Login} className="navugationLink">Log out</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;