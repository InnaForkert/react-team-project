import { MainButton } from './Button.styled';

export default function Button({
  type,
  content,
  handleClick = null,
  disabled = false,
  hasAccent = false,
}) {
  return (
    <MainButton
      type={type}
      handleClick={handleClick}
      disabled={disabled}
      hasAccent={hasAccent}
    >
      {content}
    </MainButton>
  );
}
