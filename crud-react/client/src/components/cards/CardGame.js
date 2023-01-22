import React from 'react';
import FormDialog from "../dialog/FormDialog";

function CardGame({ id, name, cost, category}) {
    const [open, setOpen] = React.useState(false);
    
    const handleClickCard = () => {
        setOpen(true);
    }
    
    return (   
        <div className='w-64'>
                <FormDialog
                      open={open}
                      setOpen={setOpen}
                      id={id}
                      name={name}
                      cost={cost}
                      category={category}
                    />               
            <div className='border shadow-xl p-9' onClick={() => handleClickCard()}>
                <h1>Nome: {name}</h1>
                <p>Custo: {cost} R$</p>
                <p>Categoria: {category}</p>
            </div>
        </div>
    )
}
export default CardGame;