import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function CadstroCategoria() {
  return (
    <PageDefault>
      <h1>cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>
        <button>
          Cadastar
        </button>
      </form>

      <Link to="/">
        Ir para Home
    </Link>
    </PageDefault>
  )
}

export default CadstroCategoria;