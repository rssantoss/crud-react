import React from 'react';
import CardGame from './CardGame';

function CardList({ games }) {
    return (
        <div className='grid grid-cols-4'>
            {games.map((game) => (
                <div className='p-6'>
                    <CardGame
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        cost={game.cost}
                        category={game.category}
                    />
                </div>
            ))}
        </div>
    )
}

export default CardList;
