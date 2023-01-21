import React, { useState } from "react";
import './App.css';

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
      setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
      }));
  };

  const handleClickButton = () => {
    console.log(values);
  }

  return (
    
    <div className=' bg-gray-100 grid grid-cols-1 lg:grid-cols-2'>
      <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
        <div className="flex-grow">
          <h1 className="text-white text-center text-2xl sm:text-5xl mb-2">
            Seja bem-vindo
          </h1>
          <p className="text-center text-blue-200 sm:text-lg">
            Realize cadastro de produtos
          </p>
        </div>
      </div>
      
      <div className="lg:min-h-screen lg:flex lg:items-center px-60 py-20 lg:px-60 xl:px-80">
        <div className="flex-grow bg-white shadow-xl rounded-md p-8">
          <div className="py-3">
            <label className="block text-sm text-gray-800  mb-1">Nome</label>
            <input type="text" name="name" placeholder="Name" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
          </div>
          <div className="py-3">
            <label className="block text-sm text-gray-800  mb-1">Preço</label>
            <input type="text" name="cost" placeholder="Preço" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
          </div>
          <div className="py-3">
            <label className="block text-sm text-gray-800  mb-1">Categoria</label>
            <input type="text" name="category" placeholder="Categoria" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
          </div>
          <div className="py-3">
            <button className="w-full text-lg font-bold bg-blue-500 hover:bg-blue-600  rounded text-white shadow p-1" onClick={() => handleClickButton()}>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;