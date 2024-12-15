import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Article } from '../interface/Article';

import styles from '../css/AddPage.module.css';

function AddPage() {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const nameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const descChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDesc(event.target.value);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!name || !desc) {
            setError('Wypełnij wszystkie pola!')
            return
        }

        const storedArticles = localStorage.getItem('articles');
        const articles = storedArticles ? JSON.parse(storedArticles) : [];
        const newID = articles.length;
        const newArticle: Article = {
                                    id : `${newID}`,
                                    name : name,
                                    description: desc
                                    }
        articles.push(newArticle);
        localStorage.setItem('articles', JSON.stringify(articles));
        
        setName('');
        setDesc('');
        setError('');

        navigate('/blog');

    }

    return (
        <form className={styles['add-wrapper']} onSubmit={handleSubmit}>
            <h1> Dodaj nowy artykuł </h1>
            <div className={styles['input-box']}>
                <input type="text" value={name} placeholder='Nazwa artykułu...' onChange={nameChange}/>
            </div>
            <div className={styles['textarea-box']}>
                <textarea value={desc} placeholder="Opis artykułu..." onChange={descChange}/>
            </div>
            <label className={styles['add-error']}> {error} </label>
            <div className={styles['add-btn']}>
                <button type="submit"> Dodaj </button>
            </div>
            <Link to="/blog" className={styles['add-link']}>
                Powrót do bloga
            </Link>
        </form>
    )
}

export default AddPage;