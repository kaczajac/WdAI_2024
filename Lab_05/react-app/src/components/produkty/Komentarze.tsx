import { useEffect, useState } from "react";
import Komentarz, { KomentarzProps } from "./Komentarz";

function Komentarze() {

    const [comms, setComms] = useState<KomentarzProps[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/comments')
        .then(response => response.json())
        .then(data => {
            setComms(data.comments)
        })

    }, [])

    return (
        <>
        {comms.map(c => <Komentarz id={c.id} 
                                    body={c.body} 
                                    postId={c.postId} 
                                    likes={c.likes}
                                    user={c.user}/>)}
        </>
    )
}

export default Komentarze;