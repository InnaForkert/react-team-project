import { useDispatch } from 'react-redux';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';
import { RoundBtn, Icon } from './AddTransactionBtn.styled';
import sprite from '../../assets/icons/sprite.svg';

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
      <Icon>
        <use href={sprite + '#icon-plus'}></use>
      </Icon>
    </RoundBtn>
  );
}
