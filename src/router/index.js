
import React from 'react';
import { Route, Router,Switch, Redirect } from 'react-router-dom';
import Login from './../views/login/index';
import Index from './../views/index/index';
import Home from './../home/index';
import {isLogin} from './../utils/index';

const Root = () => (
    <div>
        <Switch>
            <Route
                path="/"
                render={props => {
                    if(isLogin()){
                        return (
                            <div>
                                <Switch>
                                    <Route path="/" exact component={Index} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/index" component={Index} />
                                    <Route path="/home" component={Home} />
                                    {/*路由不正确时，默认跳回home页面*/}
                                    <Route render={() => <Redirect to="/" />} />
                                </Switch>
                            </div>
                        )
                    }else{
                        return (
                            <div>
                                <Switch>
                                    <Route path="/" exact component={Login} />
                                    <Route render={() => <Redirect to="/" />} />
                                </Switch>
                            </div>
                        )
                    }

                }}
            />
        </Switch>
    </div>
);

export default Root;