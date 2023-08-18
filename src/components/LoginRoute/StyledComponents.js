import styled from 'styled-components'

export const DivMainContainer = styled.div`
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DivContainer = styled.div`
  //   background-position: center;
  box-shadow: 2px 5px 2px #ffffff;
  background-color: #ffffff;
  padding: 50px;
  height: 450px;

  display: flex;
`
export const NameInput = styled.input`
  width: 300px;
  height: 35px;
`
export const PasswordInput = styled.input`
  width: 300px;
  height: 35px;
`

export const UserNameText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
  margin-top: 50px;
`
export const PasswordText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
`

export const CheckBox = styled.input`
  margin-top: 20px;
  align-self: flex-start;
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckBoxLabel = styled.label`
  margin-bottom: 30px;
  margin-top: 16px;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
export const FormContainer = styled.form`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: 80px top;
  background-size: 150px;
  background-repeat: no-repeat;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
`
