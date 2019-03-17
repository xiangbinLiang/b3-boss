import React,{ Component } from 'react';
import {Form} from 'antd';
import LoginForm from './login-form';
const bg = require('./img/bg.jpg')


class Login extends Component{
    render(){
        const LoginFormDetail = Form.create()(LoginForm);

        return (
            <div style={styles.container}>
                <LoginFormDetail/>
            </div>
        )
    }
}
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(' + bg + ')'
    }
}
export default Login;