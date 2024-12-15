import { Link } from 'react-router-dom';
import styles from '../css/HomePage.module.css'

function HomePage() {
    return (
        <div className={styles['home-wrapper']}>
            <h1> Witaj </h1>
            <div className={styles['home-button']}>
                <Link to="/blog" className={styles['home-link']}>
                    <p> Zapraszamy </p>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;