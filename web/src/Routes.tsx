import { Route, Routes as Switch } from 'react-router-dom'

import { Dashboard } from './page/Dashboard'
import { Login } from './page/Login'

export function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
    </Switch>
  )
}
