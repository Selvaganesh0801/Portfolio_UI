// src/common/utils/showCustomToast.js
import { toast } from 'react-toastify';
import CustomToast from '../toast';

export const showInfoToast = (message, subText) => {
  toast(<CustomToast message={message} subText={subText} />, {
    position: 'top-right',
    autoClose: 500000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    hideProgressBar: true,
  });
};
