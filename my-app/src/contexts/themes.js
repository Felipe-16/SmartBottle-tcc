import { createContext, useContext, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes/themes';

/* 1 - Criação do Contexto, utilizando função nativa do React */
export const ThemeContext = createContext();


/* 2 - Criação do Provider que irá repassar o tema para as rotas da aplicação */
export const ThemeContextProvider = ({ children }) => {

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      return 'dark';
    } else {
      return 'light';
    }
  });

  // Defina o objeto de tema com as propriedades desejadas
  const theme = isDarkTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}


/* 3 - Criação de um Hook para utilização do contexto de forma simplicada
pelos componentes da aplicação */
export const useThemeContext = () => {

  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (isDarkTheme === 'dark') {
      setIsDarkTheme('light');
      localStorage.setItem('theme', 'light');
    }
    if (isDarkTheme === 'light') {
      setIsDarkTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return {
    changeTheme
  }
}