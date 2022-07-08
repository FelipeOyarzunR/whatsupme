import logo from './WhatsApp_logo.png';
import './App.css';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

function App() {

  const [phone, setPhone] = useState('0');
  const [isError, setIsError] = useState(false);

  const send= () =>{
    window.open('https://wa.me/'+phone);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Agrega un chat a WhatsApp .
        </p>
        <TextField id="outlined-basic" 
                    label="Teléfono" 
                    pattern="\x2b[0-9]+" 
                    variant="outlined" 
                    type="number"
                    error={isError}
                    onChange={e => 
                    {setPhone(e.target.value);
                      if (e.target.value.length > 10) {
                        setIsError(true);
                      }
                      else setIsError(false);
                    }
                    }
        >          
        </TextField>
        <Button variant="contained" onClick={send} >Enviar</Button>

      </header>
    </div>
  );
}

export default App;
