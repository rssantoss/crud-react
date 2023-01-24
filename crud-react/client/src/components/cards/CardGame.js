import React from 'react';
import FormDialog from "../dialog/FormDialog";

function CardGame({ id, name, cost, category }) {
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    }

    return (
        <div>
            <FormDialog
                open={open}
                setOpen={setOpen}
                id={id}
                name={name}
                cost={cost}
                category={category}
            />
            <div className='xl:h-48 bg-white border rounded-md shadow-xl p-9 hover:bg-gray-200' onClick={() => handleClickCard()}>
                <label className='flex flex-col items-center'>
                    <h1 className='font-bold text-lg'>{name}</h1>
                    <p>{cost} R$</p>
                    <p>{category}</p>
                    <hr class="w-full h-0.5 mx-auto my-4 bg-gray-100 border rounded md:my-10 dark:bg-black"></hr>
                </label>
            </div>
        </div>
    )
}
export default CardGame;