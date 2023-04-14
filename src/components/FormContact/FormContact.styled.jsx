import { Form, Field, Formik } from 'formik';
import styled from 'styled-components';

export const FormikWrapper = styled(Formik)``;

export const FormBox = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 400px;

  background: white;
  border-radius: 30px;

  & label {
    display: flex;
    flex-direction: column;
    color: rgb(9 9 121);
    width: 100%;

    & span {
      margin-bottom: 5px;

      font-size: 20px;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
        0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
        0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const InputName = styled(Field)`
  padding: 0 20px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border: solid 2px #560bad;
  }
`;

export const InputTel = styled(InputName)``;

export const Button = styled.button`
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

export const Message = styled.p`
  color: red;
`;
