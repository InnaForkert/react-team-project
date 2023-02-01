import { useSelector } from 'react-redux';
import { BalanceContainer, BalanceText, LightText } from './Balance.styled';
import { formatMoney } from 'utils/formatMoney';

export default function Balance() {
  const balance = useSelector(state => state.auth.user.balance);

  return (
    <BalanceContainer>
      Your balance
      <BalanceText>
        <LightText>₴</LightText> {formatMoney(balance)}
      </BalanceText>
    </BalanceContainer>
  );
}
