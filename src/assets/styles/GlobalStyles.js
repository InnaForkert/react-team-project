import { createGlobalStyle } from 'styled-components';

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
`;
