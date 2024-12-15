import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Article } from '../interface/Article';

import styles from '../css/ArticlePage.module.css';

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    if (storedArticles) {
      const articles: Article[] = JSON.parse(storedArticles);
      const foundArticle = articles.find((a) => a.id === id);
      setArticle(foundArticle || null);
    }
  }, [id]);

  if (!article) {
    return <div> 404 - Artykuł nie został znaleziony. </div>;
  }

  return (
    <div className={styles['article-body']}>
      <div className={styles['article-wrapper']}>
          <h1> {article.name} </h1>
          <div className={styles['article-paragraph']}>
            <p> {article.description} </p>
          </div>
          <Link to="/blog" className={styles['article-link']}> Powrót do bloga </Link>
      </div>
    </div>
  );
};

export default ArticlePage;