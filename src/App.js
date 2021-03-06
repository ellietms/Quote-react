import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const [Quote, setQuote] = useState({});
  useEffect(() => newQuote(), []);
  function newQuote() {
    fetch("https://cyf-quote-backend.herokuapp.com/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto px-3 boxContainer">
       <div className="img-1 mb-5">
       <img className="img-1 mb-4"
        src="https://www.pngkit.com/png/full/137-1376664_flower-art-decoupage-flowers-png.png"
        alt="flower"/>
      
        <img className="img-1 mb-4"
        src="https://www.pngkit.com/png/full/137-1376664_flower-art-decoupage-flowers-png.png" 
        alt="flower"/>
       </div>
      <div className="my-4 mx-auto px-auto">
      <i className="fas fa-book mx-2 my-auto"></i>
        {Quote.quote}
      </div>
      <div className="my-4 mx-2 px-auto author">
      <i className="fas fa-pen mx-2 my-auto"></i>
         Author : {Quote.author}
      </div>
      <button
      className="button"
      onClick={() => newQuote()}>quote</button>
      <div className="img-1">
        <img className="mb-2 img-1"
        src="https://www.pngkit.com/png/full/137-1376664_flower-art-decoupage-flowers-png.png"
        alt="flower"/>
        <img className="mb-2 img-1"
        src="https://www.pngkit.com/png/full/137-1376664_flower-art-decoupage-flowers-png.png"
        alt="flower"/>
       </div>
    </div>
    </div>
    </div>
  );
}

export default App;