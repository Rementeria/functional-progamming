import React from 'react';
import './App.css';

function App() {
  const product = {
    name: 'Apple',
    quantity: 1
    };

  const {
    quantity,
    ...newProduct
    } = product;

  const log = () =>{
    console.log(product);
    console.log(newProduct);
  }
  //

  return (
    <div className="App">
      <h1>Titulo</h1>
      <button onClick={() => log()}>console.log</button>
    </div>
  );
}

export default App;
