import { MainButton } from './Button.styled';

export default function Button({
  type,
  content,
  onClick = null,
  disabled = false,
  hasAccent = false,
}) {
  return (
    <MainButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      hasAccent={hasAccent}
    >
      {content}
    </MainButton>
  );
}
