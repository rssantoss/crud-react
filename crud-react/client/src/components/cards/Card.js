import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardList from "./CardList";
import FormDialog from "../dialog/FormDialog";

function Card() {    
    const [games, setGames] = useState();
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards")
        .then((response) => {
            setGames(response.data);
        });
    }, []);

    return (
        <div className="">
            {typeof games !== "undefined" && <CardList games={games} />}
        </div>
        
    );
}

export default Card;
