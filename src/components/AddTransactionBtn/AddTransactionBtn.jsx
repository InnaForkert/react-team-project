import { RoundBtn } from './AddTransactionBtn.styled';

export default function AddTransactionBtn({
  type,
  content,
  onClick = null,
  disabled = false,
  hasAccent = false,
}) {
  return (
    <RoundBtn
      type={type}
      onClick={onClick}
      disabled={disabled}
      hasAccent={hasAccent}
    >
      {content}
    </RoundBtn>
  );
}
