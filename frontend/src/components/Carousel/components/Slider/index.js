import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 172px;
    transform: initial;
    background: rgba(20, 20, 20, 0.863);
    transition: opacity .3s;

    &:before {
      font-size: 30px;
      color: rgb(101, 81, 81);
    }
  }

  .slick-prev:hover,
  .slick-next:focus {
   opacity: .5;
   background: rgba(20, 20, 20, 1);
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 400,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 