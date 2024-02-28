import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLoginLayout from './layouts/AdminLoginLayout';
import AdminDashboardLayout from './layouts/AdminDashboardLayout';

import { NormalRoutes, AuthRoutes, AdminRoutes, AdminAuthRoutes } from './routes/Routing';

function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>

        {NormalRoutes.map((route, index)=>{
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <MainLayout>
                  <Page />
                </MainLayout>
              }>
            </Route>
          )
        })}

        {AuthRoutes.map((route, index)=>{
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <AuthLayout>
                  <Page />
                </AuthLayout>
              }>
            </Route>
          )
        })}

        {AdminAuthRoutes.map((route, index)=>{
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <AdminLoginLayout>
                  <Page />
                </AdminLoginLayout>
              }>
            </Route>
          )
        })}

        {AdminRoutes.map((route, index)=>{
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <AdminDashboardLayout>
                  <Page />
                </AdminDashboardLayout>
              }>
            </Route>
          )
        })}

      </Routes>
    </div>
  </Router>
  );
};

export default App;
