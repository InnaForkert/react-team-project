import styled from 'styled-components';
import minus from '../../assets/icons/all_icons/minus.svg';
import plus from '../../assets/icons/all_icons/plus.svg';

export const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  &:checked + label:after {
    left: calc(100% + 3px);
    transform: translateX(-100%);
    background-color: ${({ theme }) => theme.colors.accentPink};
    background-image: url(${minus});
    background-size: ${({ theme }) => theme.spacing(5)};
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  }
  &:checked + label {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Label = styled.label`
  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(10)};
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.spacing(7.5)};
  &::after {
    content: '';
    width: ${({ theme }) => theme.spacing(11)};
    height: ${({ theme }) => theme.spacing(11)};
    background-color: ${({ theme }) => theme.colors.accentGreen};
    background-image: url(${plus});
    background-size: ${({ theme }) => theme.spacing(5)};
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    position: absolute;
    border-radius: ${({ theme }) => theme.spacing(17.5)};
    top: -3px;
    left: -3px;
    transition: 0.5s;
  }
`;
