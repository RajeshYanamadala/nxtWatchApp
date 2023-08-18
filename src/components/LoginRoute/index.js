import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
  DivMainContainer,
  DivContainer,
  NameInput,
  PasswordInput,
  UserNameText,
  PasswordText,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  Div,
  FormContainer,
  ErrorMsg,
} from './StyledComponents'

const LoginRoute = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setChecked] = useState(false)
  const [status, setStatus] = useState('')
  const history = useHistory()

  const handleCheckChange = () => {
    setChecked(prevChecked => !prevChecked)
  }

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const submitUserData = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    setUserName('')
    setPassword('')
    setStatus(data)
    history.push('/')
  }

  const errorMsg = status.status_code === 400 ? status.error_msg : ''

  return (
    <DivMainContainer>
      <DivContainer>
        <FormContainer onSubmit={submitUserData}>
          <UserNameText>UserName</UserNameText>
          <NameInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChangeUserName}
          />
          <PasswordText>Password</PasswordText>
          <PasswordInput
            type={isChecked ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <Div>
            <CheckBox
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleCheckChange}
            />
            <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
          </Div>
          <LoginButton type="submit">Login</LoginButton>
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </FormContainer>
      </DivContainer>
    </DivMainContainer>
  )
}

export default LoginRoute
