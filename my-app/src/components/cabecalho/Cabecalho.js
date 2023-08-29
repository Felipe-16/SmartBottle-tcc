import React from 'react';
import styled from 'styled-components';

const Cabecalho = () => {
    return (
        <Header>
            <Label>Mesas dos SmartBottles</Label>
            <DivSvg>
                <SvgContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 16 16">
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" fill="black" />
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" fill='black' />
                    </svg>
                </SvgContainer>
                <SvgContainerSmall>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M29.1925 17.7787C29.0642 17.6502 28.9034 17.559 28.7272 17.515C28.551 17.4709 28.3662 17.4757 28.1925 17.5287C26.2857 18.1052 24.2583 18.1535 22.3262 17.6686C20.3941 17.1837 18.6298 16.1836 17.2212 14.7751C15.8126 13.3665 14.8126 11.6022 14.3277 9.67008C13.8427 7.73799 13.8911 5.71054 14.4675 3.80375C14.521 3.63 14.5261 3.44496 14.4823 3.26852C14.4385 3.09207 14.3475 2.93091 14.2189 2.80236C14.0904 2.67381 13.9292 2.58274 13.7528 2.53893C13.5763 2.49513 13.3913 2.50025 13.2175 2.55375C10.5813 3.36131 8.26695 4.97974 6.60378 7.17875C5.14929 9.10982 4.26209 11.4082 4.04186 13.8157C3.82162 16.2232 4.27707 18.6444 5.35704 20.8074C6.437 22.9703 8.0987 24.7892 10.1554 26.0598C12.2122 27.3304 14.5825 28.0023 17 28C19.8205 28.0087 22.5658 27.0918 24.815 25.39C27.014 23.7268 28.6325 21.4125 29.44 18.7763C29.4929 18.6031 29.4978 18.4189 29.4542 18.2433C29.4106 18.0676 29.3202 17.9071 29.1925 17.7787ZM23.6125 23.7925C21.4945 25.3878 18.8714 26.1644 16.2262 25.9791C13.581 25.7939 11.0918 24.6594 9.2167 22.7845C7.34162 20.9096 6.20692 18.4204 6.02149 15.7752C5.83606 13.1301 6.61237 10.5069 8.20753 8.38875C9.24678 7.01632 10.5904 5.90381 12.1325 5.13875C12.0447 5.75528 12.0004 6.37724 12 7C12.0037 10.4467 13.3745 13.7512 15.8117 16.1884C18.2488 18.6256 21.5533 19.9964 25 20C25.624 19.9998 26.2473 19.9555 26.865 19.8675C26.0993 21.4099 24.9859 22.7535 23.6125 23.7925Z" fill="black" />
                    </svg>
                </SvgContainerSmall>
            </DivSvg>
        </Header>
    );
};

export default Cabecalho;

const Header = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centraliza verticalmente */
  text-align: center;
`;

const Label = styled.a`
  margin-left: 104px;
  color: var(--black, #000);
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 60px;
`;

const DivSvg = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  gap: 32px; /* Espaçamento entre os SVGs */
  margin-top: 53px;
  margin-right: 182px;
`;

const SvgContainer = styled.div`
  width: 56px; /* Largura do primeiro SVG */
  height: 56px; /* Altura do primeiro SVG */
`;

const SvgContainerSmall = styled.div`
  width: 32px; /* Largura do segundo SVG menor */
  height: 32px; /* Altura do segundo SVG menor */
`;