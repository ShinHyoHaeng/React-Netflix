import React from 'react';
import "./app.scss"
import { Route, withRouter } from "react-router-dom";
import Intro from "./pages/intro/Intro"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from './pages/watch/Watch';

const App = () => {
  return(    
    <>
      {/* 초기 화면: Register 컴포넌트 */}
      <Route path="/React-Netflix/" exact={true} component={Intro} /> 
      <Route path="/React-Netflix/register" component={Register} />
      <Route path="/React-Netflix/login" component={Login} />
      <Route path="/React-Netflix/home" component={Home} />
      <Route path="/React-Netflix/watch/:movieId" component={Watch}/>
    </>
  );
};

export default withRouter(App);