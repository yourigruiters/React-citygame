import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import Layout from './Layout';
import HomePage from './containers/pages/home';
import NotFoundPage from './pages/notFound/NotFound.page';

interface Props {
  reduxTheme: ThemeType;
}

const App: React.FC<Props> = ({ reduxTheme }) => {
  return (
    <ThemeProvider theme={ColorTheme[reduxTheme]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=":test" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
