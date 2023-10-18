import React from 'react';
import styled from 'styled-components';

const ContainerMesa = ({title, nomeChip, temperature, status, ligado }) => {
  const isAtendido = nomeChip === 'Atendido';


  if (ligado === 1) {
    return (
      <CardWrapperLigado>
        <SvgContainer>
          <StatusSvg status={status}></StatusSvg>
        </SvgContainer>
        <ContentLigado>
          <Title>{title}</Title>
          <ChipStatus atendido={isAtendido}>
            <Text>{nomeChip}</Text>
          </ChipStatus>
          <Info>
            <p>Status da bebida: {status}</p>
            <p>Temperaturada bebida: {temperature}°C</p>
          </Info>
        </ContentLigado>
      </CardWrapperLigado>
    );
  } else if (ligado === 0) {
    return (
      <CardWrapperDesligado>
        <SvgContainer>
          <SvgNada />
        </SvgContainer>
        <ContentDesligado>
          <Title>{title}</Title>
        </ContentDesligado>
      </CardWrapperDesligado>
    );
  } else {
    return null; // Caso ligado não seja 0 nem 1
  }
};

export default ContainerMesa;


const CardWrapperLigado = styled.div`
  width: 407px;
  height: 198px;
  display: flex;
  background-color:${(props) => props.theme.containerColor};
  border-radius: 20px;
  margin-bottom: 20px;
  flex-shrink: 0;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
`;

const CardWrapperDesligado = styled.div`
  width: 407px;
  height: 70px;
  display: flex;
  background-color: #969D9D;
  border-radius: 20px;
  margin-bottom: 20px;
  flex-shrink: 0;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
`;

const SvgContainer = styled.div`
  width: 20px;
  padding: 10px;
`;


const StatusSvg = ({ status }) => {
  if (status === 'Cheia') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="177" viewBox="0 0 20 177" fill="none">
        <rect y="0.31427" width="20" height="175.371" rx="10" fill="#DBE3F0" />
        <rect y="0.879974" width="20" height="175.371" rx="10" fill="url(#paint0_linear_39_297)" />
        <defs>
          <linearGradient id="paint0_linear_39_297" x1="10" y1="0.879974" x2="10" y2="176.251" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFC700" />
            <stop offset="0.9999" stop-color="#765C00" />
            <stop offset="1" stop-color="#C19808" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (status === 'Metade') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="185" viewBox="0 0 28 185" fill="none">
        <rect x="4" y="0.31427" width="20" height="175.371" rx="10" fill="#DBE3F0" />
        <g filter="url(#filter0_d_39_395)">
          <rect x="4" y="88.5657" width="20" height="87.6857" rx="10" fill="url(#paint0_linear_39_395)" shape-rendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_d_39_395" x="0" y="88.5657" width="28" height="95.6857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_39_395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_39_395" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_39_395" x1="14" y1="88.5657" x2="14" y2="176.251" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFC700" />
            <stop offset="0.9999" stop-color="#765C00" />
            <stop offset="1" stop-color="#C19808" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (status === 'Vazia') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="176" viewBox="0 0 20 176" fill="none">
        <rect y="0.31427" width="20" height="175.371" rx="10" fill="#DBE3F0" />
      </svg>
    );
  } else {
    return null; // Caso o status não seja um dos valores acima
  }
};

const SvgNada = styled.div`
  width: 20px;
  height: 49.412px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--white-2, #DBE3F0);  
  `

const ContentLigado = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentDesligado = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ChipStatus = styled.div`
  display: flex;
  padding: 12px 20px;
  width: 126px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: ${props => (props.atendido ? '#2CB44E' : '#FFE500')};
  
`;

const Text = styled.p`
  color: var(--black, #000);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Info = styled.div`
color: ${(props) => props.theme.textColor};
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

