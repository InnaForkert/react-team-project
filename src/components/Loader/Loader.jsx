import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Triangle
      height="150"
      width="150"
      color="#4A56E2"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%)',
      }}
      visible={true}
    />
  );
}
