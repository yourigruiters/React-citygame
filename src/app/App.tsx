import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import Layout from './Layout';
import NotFoundPage from './pages/notFound/NotFound.page';
import { useSelector } from 'react-redux';
import { ReduxState } from './typings/state';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCreditCard,
  faCoins,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faCoins, faCreditCard, faLocationDot);

interface Props {}

const App: React.FC<Props> = () => {
  const reduxTheme: ThemeType = useSelector(
    (state: ReduxState) => state.theme.mode,
  );

  useEffect(() => {
    console.log(`Theme switched to: ${reduxTheme}`);
  }, [reduxTheme]);

  return (
    <ThemeProvider theme={ColorTheme[reduxTheme]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path=":test" element={<HomePage />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
