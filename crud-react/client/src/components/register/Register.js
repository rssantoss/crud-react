import React, { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

function Register() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div class="min-h-screen bg-indigo-100">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div class="flex-grow">
            <h1 class="text-white text-center text-2xl sm:text-5xl mb-2">
              Seja bem-vindo(a)
            </h1>
            <p className="text-center text-blue-200 sm:text-lg hover:underline"><Link to='/cards'>Clique aqui para visualizar os Jogos</Link></p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-6">
            <label>
              <h1 className="font-mono text-2xl font-bold text-center mb-4">Cadastrar Produto</h1>
            </label>
            <div className="bg-white shadow-xl rounded-md space-y-4 p-6">
              <div className="">
                <label className="block text-sm text-gray-800  mb-1">Nome</label>
                <input type="text" name="name" placeholder="Name" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
              </div>
              <div className="">
                <label className="block text-sm text-gray-800  mb-1">Preço</label>
                <input type="text" name="cost" placeholder="Preço" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
              </div>
              <div className="">
                <label className="block text-sm text-gray-800  mb-1">Categoria</label>
                <input type="text" name="category" placeholder="Categoria" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
              </div>
              <div className="">
                <button className="w-full text-lg font-bold bg-blue-500 hover:bg-blue-600  rounded text-white shadow p-1" onClick={() => handleClickButton()}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;