import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import Button from '../../../components/Button';

const ButtonStyle = styled.a`

  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;

  position: absolute;
  bottom: 170px;
  right: 70px;

  padding: 5px 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  
  @media (max-width: 800px) {
    position:  static;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &:hover,
  &:focus {
    opacity: .5;
    color: #daa520;
    border: #daa520;
  }
`;

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <ButtonStyle as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </ButtonStyle>
    </PageDefault>
  )
}

export default CadastroVideo;