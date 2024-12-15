import { useState } from "react";

interface User {
    id: number;
    username: string;
    fullName: string;
}


export interface KomentarzProps {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}


function Komentarz({ id, body, postId, likes, user } : KomentarzProps) {

    const [currLikes, setCurrLikes] = useState(likes);

    const increaseLikes = () => setCurrLikes(prev => prev + 1);
    const decreaseLikes = () => setCurrLikes(prev => prev - 1);

    return (
        <>
            <div key={id} className="komentarz">
                <div className="komentarz-header">
                    <h2> {user.fullName} </h2> (@{user.username})
                </div>
                <div className="komentarz-body">
                    <p> {body} </p>
                </div>
                <div className="komentarz-footer">
                    <span> Post ID: {postId} </span>
                    <div className="likes">
                        <button className="like-button" onClick={increaseLikes}> 👍 </button>
                        <span> {currLikes} </span>
                        <button className="dislike-button" onClick={decreaseLikes}> 👎 </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Komentarz;