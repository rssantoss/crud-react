import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardList from "./CardList";

function Card() {    
    const [games, setGames] = useState();
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards")
        .then((response) => {
            setGames(response.data);
        });
    }, []);

    return (
        <div className="min-h-screen bg-indigo-100">
            <div className="">
            {typeof games !== "undefined" && <CardList games={games} />}
            </div>
        </div>
        
    );
}

export default Card;
