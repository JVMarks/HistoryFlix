import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadstroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div>Página 404</div>)


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