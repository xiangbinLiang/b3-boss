import React from 'react';
import { Route } from "react-router-dom";
import Login  from './../views/login/index';
import Index  from './../views/index/index';

const  routes= [
    { path: '/login', name: '登录', component: Login },
    { path: '/', exact: true,  name: '首页', component: Index}
]

export const RenderRoutes = ({routes}) => {return (routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />))};


const route = {path: '/login', name: '登录', component: Login}

export const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props =>{
            return (
                <route.component {...props} routes={route.routes} />
            )
        }}
    />
);