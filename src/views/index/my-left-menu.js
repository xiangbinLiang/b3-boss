import React,{Component} from 'react';
import {Link, Route} from 'react-router-dom';

import {Layout, Menu} from 'antd';

const {SubMenu} = Menu;
const {Sider} = Layout;


export default class NavLayout extends Component {


    render() {
        return (
            <Sider width={200} style={styles.sideNav}>
                <Menu
                    mode="inline"
                    selectedKeys ={[ "11"]}
                    openKeys = {['1']}
                    onOpenChange={this._openKeysChange}
                    style={{height: '100%'}}
                >
                            <SubMenu
                                key='1'
                                title={
                                    <div style={styles.navItem}>
                                        <img style={styles.menuIcon} src='data:image/jpeg;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2Q0Q5RjBCNDI5RTExRTdCNUVDRkE0MjA0RUY0RDE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2Q0Q5RjBDNDI5RTExRTdCNUVDRkE0MjA0RUY0RDE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkU4MDdDQjA0MjkwMTFFN0I1RUNGQTQyMDRFRjREMTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDZDRDlGMEE0MjlFMTFFN0I1RUNGQTQyMDRFRjREMTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7V9eNGAAAGu0lEQVR42uybaWxUZRSG78y0U2RtASlSNoWyKYsLSkRERTDBJUYRUNQf8kOjPyAmamLUGKNRY1yiMRoNPzCiBhRr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'/>
                                        <span>会员管理</span>
                                    </div>
                                }
                            >
                                <Menu.Item key='11'>
                                    <Route path='/main' children={({match}) => (
                                        <a href="javascript:;" onClick={() => this._goThirdMenu('/main', '11', 1)}>会员列表</a>
                                    )}/>
                                </Menu.Item>
                                <Menu.Item key='12'>
                                    <Route path='/main' children={({match}) => (
                                        <a href="javascript:;" onClick={() => this._goThirdMenu('/main', '12', 1)}>组织架构</a>
                                    )}/>
                                </Menu.Item>
                            </SubMenu>
                </Menu>
            </Sider>
        )

    }


    /**
     * 修改展开状态的二级菜单
     * @param openKeys
     * @private
     */
    _openKeysChange = (openKeys) => {
        // this.setState({level2OpenedKeys: openKeys, firstInitFlag: false})
    }


    /**
     * 渲染三级菜单
     * @param v 三级菜单信息
     * @param index 二级菜单下标
     * @param i 三级菜单下标
     */
    _renderThirdMenu = (v, index, i) => {
        // return (
        //     <Menu.Item key={index + '_' + i}>
        //         <Route path={v.url} children={({match}) => (
        //             <a href="javascript:;" onClick={() => this._goThirdMenu(v.url, index, i)}>{v.title}</a>
        //         )}/>
        //     </Menu.Item>
        // );
    }


    /**
     * 记录当前选中的菜单
     */
    _setMenuSession = (first, second, third) => {
        // sessionStorage.setItem(cache.FIRST_ACTIVE, first);
        // sessionStorage.setItem(cache.SECOND_ACTIVE, second);
        // sessionStorage.setItem(cache.THIRD_ACTIVE, third);
    }


    /**
     * 三级菜单的点击事件
     * @param url
     * @param i
     * @private
     */
    _goThirdMenu = (url, index, i) => {
        // sessionStorage.setItem(cache.SECOND_ACTIVE, index);
        // // 缓存中记录当前选中的三级菜单
        // sessionStorage.setItem(cache.THIRD_ACTIVE, i);
        // history.push(url);
    }

}

const styles = {
    sideNav: {
        height: 'calc(100vh - 64px)',
        backgroundColor: '#fff'
    },
    menuIcon: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    navItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}
