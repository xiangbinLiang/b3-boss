import React,{Component} from 'react'
import { Route,Redirect } from 'react-router-dom';
import { Layout } from 'antd'
// import { routeWithSubRoutes, MyHeader, MyLeftMenu } from 'qmkit'
import './../../css/common.css'
// import { routes } from './router'
import MyHeader from './my-header'
import MyLeftMenu from './my-left-menu'
import Home from './../../home/index';
const { Content } = Layout



export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 当前浏览器地址匹配的路由path
            matchedPath: ''
        }
    }


    handlePathMatched = (path) => {
        this.setState({
            matchedPath: path
        })
    }


    componentDidUpdate() {
        // 加一层判断，避免报错影响子组件渲染
        if (document.getElementById('page-content')) {
            document.getElementById('page-content').scrollTop = 0
        }
    }


    render() {
        return (
            <div>
                <Layout>
                    {/*头部*/}
                    <MyHeader></MyHeader>
                    <Layout>
                        <Layout>
                            {/*左侧菜单*/}
                            <MyLeftMenu matchedPath={this.state.matchedPath} ref={menu => this._menu = menu} />
                            {/*右侧主操作区域*/}
                            <Content>
                                <div style={styles.wrapper} id="page-content">
                                    {/*<Route render={() => <Redirect to="/home" />} />*/}
                                    <div style={styles.copyright}>© 2017 南京万米信息技术有限公司  版本号：SBC s2b V1.2.0</div>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }


    /**
     * 头部的一级菜单刷新后,初始化左侧菜单的展开菜单状态
     * @private
     */
    _onFirstActiveChange = () => {
        this._menu._openKeysChange(['0']);
    }

};

const styles = {
    wrapper: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        height: 'calc(100vh - 64px)',
        position: 'relative',
        overflowY: 'auto'
    },
    copyright: {
        height: 48,
        lineHeight: '60px',
        textAlign: 'center',
        color: '#999',
    }
}
