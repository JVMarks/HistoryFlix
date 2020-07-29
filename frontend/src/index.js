import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadstroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (
  <div
    style={{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <h2>¯\_(ツ)_/¯ Ops, Deu pau na maquina ¯\_(ツ)_/¯</h2>
       <p>
         <a href="/"><strong>Você pode jogar ou voltar para HOME</strong></a>
       </p>
       <iframe title="Flappy Bird Game" 
       src="https://flappy-bird-blue.vercel.app/" 
       width="370"
       height="550"
       />
  </div>
)


//modo para deixar a pagina one pagine
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadstroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  //CODIGO ORIGINAL
  //<React.StrictMode>
  //<App />
  //</React.StrictMode>,
  document.getElementById('root')
);

//para installar tudos os packages é só fazer npm install o yarn add