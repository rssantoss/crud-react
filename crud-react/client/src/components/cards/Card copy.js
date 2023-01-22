import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardGame from "./CardGame";

function Card(){
    const [listGames, setListGames] = useState();
    
    useEffect(()=> {
        Axios.get("http://localhost:3001/getCards")
        .then((response)=>{
          setListGames(response.data);
        });
      }, []);

    return (
        <div>
        {typeof listGames !== "undefined" &&
            listGames.map((value) =>{
        return <CardGame 
                    key={value.id} 
                    listCard={listGames} 
                    setListCard={setListGames}
                    id={value.id}
                    name={value.name}
                    cost={value.cost}
                    category={value.category}
                    ></CardGame>
            })}
        </div>
    );
};

export default Card;