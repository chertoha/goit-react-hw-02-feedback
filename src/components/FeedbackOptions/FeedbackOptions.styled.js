import styled from 'styled-components';
import { style } from 'styled-system';

export const Button = styled.button`
  margin-right: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.bolder};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[4]};
  cursor: pointer;

  background-color: transparent;
  border: none;
  border: 1px solid ${p => p.theme.colors.secondaryText};
  border-radius: ${p => p.theme.radii.borderRadius};

  :last-child {
    margin-right: 0;
  }

  transition: background-color ${p => p.theme.transitions.default};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondaryBgd};
  }
`;
