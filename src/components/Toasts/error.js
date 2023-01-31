import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function errorToast(errorMes) {
  toast.error(errorMes, {
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
