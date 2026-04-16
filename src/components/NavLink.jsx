import styled from "styled-components";

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

function NavLink() {
  return <StyledLink href="#">Home</StyledLink>;
}

export default NavLink;