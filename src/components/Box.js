import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  fontFamily,
  border,
  shadow,
  margin,
  position,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  margin,
  flexbox,
  fontFamily,
  grid,
  background,
  border,
  shadow,
  position
);
