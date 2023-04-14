import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: -1px;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;

  border-bottom: 5px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);

  & a {
    color: #fff;
    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
  }

  & a.active {
    padding: 5px;
    color: violet;
    border-radius: 15px;
    background: rgb(227, 227, 227);
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }

  & a.active svg {
    display: block;
  }
`;
