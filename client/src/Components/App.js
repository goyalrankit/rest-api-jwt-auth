import React from 'react';
import Register from '././user/Register';
import Login from '././user/Login';
import ResetPassword from './user/ResetPassword';
import 'bootstrap/dist/css/bootstrap.css';
import AdminRegister from './admin/AdminRegister';
import AdminLogin from './admin/AdminLogin';
import AdminResetPassword from './admin/AdminResetPassword';

  const App = () => {

  return (
    <div>
      {/* <Login />
      <Register/>
      <AdminLogin/>
      <AdminRegister />
      <AdminResetPassword/> */}

      <ResetPassword/>
    </div>
  );
}

export default App;
