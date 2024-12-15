import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article } from '../interface/Article';

import styles from '../css/BlogPage.module.css';

function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  }, []);

  return (
    <div className={styles['blog-wrapper']}>
        <h1> Dostępne artykuły </h1>
        <ul>
            {articles.map((article) => (
            <li key={article.id}>
                <Link to={`/article/${article.id}`} className={styles['blog-article']}>
                    <p>{article.name}</p>
                </Link>
            </li>
            ))}
        </ul>
        <Link to="/" className={styles['blog-homepage-link']}>
          Powrót do strony głównej
        </Link>
        <Link to="/dodaj" className={styles['blog-addpage-link']}>
          Dodaj nowy artykuł
        </Link>
    </div>
  );
};

export default Blog;