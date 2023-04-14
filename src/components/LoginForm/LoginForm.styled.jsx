import { Field, Form } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  display: block;

  text-transform: uppercase;
  letter-spacing: 2px;

  font-weight: bold;
  font-size: 30px;
  color: rgb(9 9 121);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormBox = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  border-radius: 15px;
  color: rgb(9 9 121);
  background: #e3e3e3b3;
  box-shadow: -16px -16px 32px #fefefe;
  animation: ${fadeIn} 0.5s ease;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

export const Text = styled.span`
  display: flex;
  gap: 5px;
  align-items: end;
  justify-content: center;
  margin-bottom: 10px;

  font-size: 1.2rem;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;

  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;

  &::placeholder {
    font-size: 15px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const ErrorMessageText = styled.p`
  text-align: center;
  margin-top: 10px;

  color: red;
  font-size: 17px;
`;

export const SubmitButton = styled.button`
  width: 50%;
  height: 45px;
  background-color: violet;
  border-radius: 100px;
  box-shadow: rgba(187, 44, 173, 0.768) 0 -25px 18px -14px inset,
    rgba(187, 44, 144, 0.144) 0 1px 2px, rgba(187, 44, 175, 0.15) 0 2px 4px,
    rgba(187, 44, 144, 0.144) 0 4px 8px, rgba(187, 44, 175, 0.15) 0 8px 16px,
    rgba(187, 44, 144, 0.144) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(180, 44, 187, 0.282) 0 -25px 18px -14px inset,
      rgba(187, 44, 144, 0.144) 0 1px 2px, rgba(187, 44, 175, 0.25) 0 2px 4px,
      rgba(187, 44, 144, 0.144) 0 4px 8px, rgba(187, 44, 175, 0.25) 0 8px 16px,
      rgba(187, 44, 144, 0.144) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
