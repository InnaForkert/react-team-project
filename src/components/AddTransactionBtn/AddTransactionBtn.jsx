import { RoundBtn } from './AddTransactionBtn.styled';

export default function AddTransactionBtn({
  type,
  content,
  handleClick = null,
  disabled = false,
  hasAccent = false,
}) {
  return (
    <RoundBtn
      type={type}
      handleClick={handleClick}
      disabled={disabled}
      hasAccent={hasAccent}
    >
      {content}
    </RoundBtn>
  );
}
