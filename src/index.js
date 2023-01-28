import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import { GlobalStyleComponent } from 'assets/styles/GlobalStyles';
import { GlobalFontComponent } from 'assets/fonts/FontStyled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter
      // basename="react-team-project"
      >
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyleComponent />
          <GlobalFontComponent />
        </ThemeProvider>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
