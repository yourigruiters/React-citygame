import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import Layout from './Layout';
import NotFoundPage from './pages/NotFound.page';
import { useSelector } from 'react-redux';
import { ReduxState } from './typings/state';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCreditCard,
  faCoins,
  faLocationDot,
  faEarthAmericas,
  faBuildingColumns,
  faShoppingCart,
  faPeopleRobbery,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/Home.page';

library.add(
  fab,
  faBars,
  faCoins,
  faCreditCard,
  faLocationDot,
  faEarthAmericas,
  faBuildingColumns,
  faShoppingCart,
  faPeopleRobbery,
  faHouse,
);

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
            <Route path="home" element={<HomePage />} />
            {/* <Route path=":test" element={<HomePage />} /> */}
            {/* <Route path=":test" element={<HomePage />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
