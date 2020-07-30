import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ButtonStyle = styled.a`

  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;

  position: absolute;
  bottom: 170px;
  right: 80px;

  padding: 8px 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
    color: rgba(170, 45, 45, 0.863);
    border: rgba(170, 45, 45, 0.863);
  }
`;

function Cadstrovideo() {
  return (
    <PageDefault>
      <h1>cadastro de Video</h1>

      <ButtonStyle as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </ButtonStyle>

    </PageDefault>
  )
}

export default Cadstrovideo;