import { useDispatch } from 'react-redux';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import { RoundBtn } from './AddTransactionBtn.styled';

export default function AddTransactionBtn() {
  const dispatch = useDispatch();

  const handleModalAddTransactionOpen = () => {
    dispatch(toggleModalAddTransactionOpen());
  };

  return (
    <RoundBtn
      type="button"
      hasAccent={true}
      onClick={handleModalAddTransactionOpen}
    >
      +
    </RoundBtn>
  );
}
