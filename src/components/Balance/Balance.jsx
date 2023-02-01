import { useSelector } from 'react-redux';
import { BalanceContainer, BalanceText, LightText } from './Balance.styled';
import { formatMoney } from 'utils/formatMoney';
import { selectBalance } from 'redux/store';

export default function Balance() {
  const balance = useSelector(selectBalance);

  return (
    <BalanceContainer>
      Your balance
      <BalanceText>
        <LightText>₴</LightText> {formatMoney(balance)}
      </BalanceText>
    </BalanceContainer>
  );
}
