import { toast } from 'react-toastify';

function errorToast(errorMes) {
  return toast.error(errorMes, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
}

export default errorToast;
