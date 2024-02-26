import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClearClick = () => {
    setInputText('');
    setApiResponse('');
  };

  const handleSendClick = () => {
    // Certifique-se de que inputText não está vazio antes de fazer a chamada à API
    if (inputText.trim() === '') {
      console.log('Por favor, insira um valor antes de enviar.');
      return;
    }

    // Use inputText na chamada à API
    fetch(`https://swapi.dev/api/people/${inputText}/`)
      .then(response => response.json())
      .then(data => setApiResponse(data.name))
      .catch(error => console.error('Erro ao buscar dados:', error));
  };

  return (
    <div>
      <h1>React Form App</h1>
      <form>
        <label>
          Type your text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <br /><br /><br />
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="button" onClick={handleSendClick}>
          Call Star Wars API
        </button>
      </form>
      <br /><br /><br />
      <textarea rows="4" cols="50" value={apiResponse} readOnly />
    </div>
  );
};

export default App;
