// Home.js

import React, { useState } from 'react';
import { query,removeSingleBackslash } from './util';
import Clipboard from './clipboard_copy';
import './Home.css';
import Navbar from './Navbar';
import Button from './Button';

const Home = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);
  const [loading,setLoading]=useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();

    var textElement = document.querySelector('.text').value;
    setLoading(true);
    query({ "inputs": textElement }).then((response) => {
      setLoading(false);
      setResponse(response);
      
    }).catch((error) => {
      setLoading(false);
      console.error("Error in query:", error);
    });
  };

  return (
    <>
    <Navbar />
    <div className='mainContainer'>
      <div>
        <form onSubmit={clickHandler}>
          <textarea
            className='text'
            placeholder='Enter your text here'
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <Button type='submit' disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          
        </form>
      </div>
      <div className='field'>
        
          <div className='summary'>
           {
            loading ? <p>Loading ...</p>:
            response &&  <p>{removeSingleBackslash(JSON.stringify(response[0]?.summary_text))}</p>} 
          </div>
        
        <div>
          {response && (
            <Clipboard text={removeSingleBackslash(JSON.stringify(response[0]?.summary_text))} />
          )}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Home;
