import {Route, Switch} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Route path="/login" component={LoginRoute} />
    <Route path="/" component={HomeRoute} />
  </>
)

export default App
