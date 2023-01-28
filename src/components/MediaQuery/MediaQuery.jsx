import Media from 'react-media';
import { device } from '../../assets/styles/theme';

export const MediaQuery = ({ deviceName, children }) => {
  return (
    <Media queries={device}>
      {matches => {
        return matches[deviceName] && children;
      }}
    </Media>
  );
};
