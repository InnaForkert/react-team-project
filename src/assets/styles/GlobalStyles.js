import { createGlobalStyle } from 'styled-components';
import bg_pink from './../images/bg_pink.svg';
import bg_violet from './../images/bg_violet.svg';

export const GlobalStyleComponent = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul, ol {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration:none;
	color: inherit;
}
body {
	font-family: ${({ theme }) => theme.fonts.primary};
	background-color: ${({ theme }) => theme.colors.background};

	${({ theme }) => theme.media.tablet} {
	background-repeat: no-repeat, no-repeat;
  background-image: url(${bg_pink}), url(${bg_violet});
  background-position: top -150px right -254px, bottom -150px left -150px;
  }

	${({ theme }) => theme.media.desktop} {
	background-repeat: no-repeat, no-repeat;
  background-image: url(${bg_pink}), url(${bg_violet});
  background-position: top -150px right -150px, top 368px left -150px;;
  }

  td{text-align: center}
}`;
