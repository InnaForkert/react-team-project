import { createGlobalStyle } from 'styled-components';

import CirceWoff from './Circe/Circe-Regular.woff';
import CirceWoff2 from './Circe/Circe-Regular.woff2';
import CirceBoldWoff from './Circe/Circe-Bold.woff';
import CirceBoldWoff2 from './Circe/Circe-Bold.woff2';

import PoppinsWoff from './Poppins/Poppins-Regular.woff';
import PoppinsWoff2 from './Poppins/Poppins-Regular.woff2';
import PoppinsBoldWoff from './Poppins/Poppins-Bold.woff';
import PoppinsBoldWoff2 from './Poppins/Poppins-Bold.woff2';

export const GlobalFontComponent = createGlobalStyle`
@font-face {
  font-family: 'Circe';
  src: local('Circe'), local('Circe'),
	url(${CirceWoff2}) format('woff2'), 
	url(${CirceWoff}) format('woff'),
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Circe';
  src: local('Circe'), local('Circe'),
  url(${CirceBoldWoff2}) format('woff2'),
  url(${CirceBoldWoff}) format('woff'),
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: local('Poppins'), local('Poppins'),
  url(${PoppinsWoff2}) format('woff2'),
  url(${PoppinsWoff}) format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Poppins';
  src: local('Poppins'), local('Poppins'),
  url(${PoppinsBoldWoff2}) format('woff2'),
  url(${PoppinsBoldWoff}) format('woff'),
  font-weight: bold;
  font-style: normal;
}`;
