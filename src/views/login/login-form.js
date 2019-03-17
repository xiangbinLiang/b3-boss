import React,{ Component } from 'react'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd'
import {post} from "../../utils/index"
import md5 from 'md5'
import PropTypes from 'prop-types';
const FormItem = Form.Item
const logo = require('./img/logo.png');

class LoginForm extends Component {

    static contextTypes = {

        router: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    render() {
        const loginLogo = "https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201903071542079095.png"

        return (
            <Form style={styles.loginForm}>
                <FormItem style={{marginBottom: 15}}>
                    <div style={styles.header}>
                        <img style={styles.logo} src={loginLogo ? loginLogo : logo} />
                    </div>
                    <strong style={styles.title}>运营后台</strong>
                </FormItem>
                <FormItem>
                    {(
                        <Input
                            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                            placeholder="请输入您的手机号码或者账号"
                            onChange = {(e)=>{this.setState({username:e.target.value})}}/>
                    )}
                </FormItem>
                <FormItem style={{ marginBottom: 0 }}>
                    {(
                        <Input
                            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                            type="password"
                            placeholder="密码"
                            onChange = {(e)=>{this.setState({password:md5(e.target.value)})}}/>
                    )}
                </FormItem>
                <FormItem>
                    <a style={{ float: 'right' }} >忘记密码</a>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" style={styles.loginBtn} onClick={() => this._handleLogin()}>登录</Button>
                </FormItem>
                <FormItem style={{ marginBottom: 0 }}>
                    <div><p style={{ textAlign: 'center', lineHeight: '20px', color: '#999' }}>© 2017 南京万米信息技术有限公司</p>
                        <p style={{ textAlign: 'center', lineHeight: '20px', color: '#999' }}>版本号：SBC s2b V1.2.0</p></div>
                </FormItem>
            </Form>
        );
    }

    _handleLogin = async () => {
        let data={
            username:this.state.username,
            password:this.state.password
        }
        let res = await post("http://127.0.0.1:8089/b3-bin/login_index",data)
        if(res.code != 'E-000000') {
            message.error(res.message)
            return
        }
        sessionStorage.setItem("B3-platform@login", JSON.stringify(res.context))
        this.context.router.history.push("/index");
    }
}


const styles = {
    loginForm: {
        width: 370,
        minHeight: 325,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 30,
        marginTop: -50
    },
    loginBtn: {
        width: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10

    },
    logo: {
        display: 'block',
        width: 'auto',
        height: 42,
    },
    title: {
        fontSize: 18,
        color: '#333',
        lineHeight: 1,
        textAlign: 'center',
        display: 'block'
    }
}

export default LoginForm;
