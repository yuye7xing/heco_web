import React from 'react'
import styled from 'styled-components'
import  Configuration  from '../../../config';

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href="https://t.me/theepoch2021" target="_blank">Telegram</StyledLink>
      <StyledLink href="http://y3ezuyfjmn6bzm07.mikecrm.com/G5dl5aD" target="_blank">Airdrop</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 835px) {
    margin-bottom:20px;
  }
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[200]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[0]};
  }
`

export default Nav