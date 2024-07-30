import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Signup from '../Components/Login/Signup';
import Dashboard from '../Components/Login/Dashboard';
import Demo from '../Components/useHooks/Callback';
import Memo from '../Components/useHooks/Memo';
import InfiniteScroll from '../Components/PageAndScroll/InfiniteScroll';
import ContextDemo from '../Components/useHooks/Context';
// import PrivateRoute from './PrivateRoute';


const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    {/* <Route element={<PrivateRoute />}> */}
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/callback" element={<Demo />} />
    <Route path="/memo" element={<Memo />} />
    <Route path="/scroll" element={<InfiniteScroll />} />
    <Route path="/Context" element={<ContextDemo />} />
    {/* </Route> */}
  </Routes>
);

export default AppRoutes;
