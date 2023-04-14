import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: center;
  height: 100vh;

  & h1,
  h2 {
    margin: 0;
    color: pink;
    text-shadow: 0px 6px 4px rgba(80, 94, 233, 0.63);
  }
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const Text = styled.h2`
  font-size: 30px;
`;

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
`;
