import React,{Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {Layout, Menu, Dropdown, Icon} from 'antd';
// import history from './../../utils/history';
import PropTypes from 'prop-types';


const {Header} = Layout;


class MyHeader extends Component {
    static contextTypes = {

        router: PropTypes.object.isRequired,
    }

    render() {
        let menuPreview = null;
        let accountName = "梁祥斌";

        const menu = (
            <Menu>
                {accountName == '梁祥斌' ? (
                    <Menu.Item key="0">
                        <Link to={'/account-manage'}>
                            <Icon type="user"/> 账户管理
                        </Link>
                    </Menu.Item>
                ) : null}

                <Menu.Item key="1">
                    <Link to={'/find-password'}>
                        <Icon type="lock"/> 修改密码
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href="javascript:;" onClick={() => this._handleLogout()}>
                        <Icon type="logout"/> 退出
                    </a>
                </Menu.Item>
                <Menu.Divider/>
            </Menu>
        );

        return (
            <Header className="header">
                <div style={styles.headerLeft}>
                    <a href="/" style={styles.logoBg}>
                        <img
                            style={styles.logoImg}
                            src='https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201903071542079095.png'
                        />
                    </a>

                    <Menu
                        style={styles.navMenu}
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={["1"]}
                    >
                        <Menu.Item key='1'>
                            <a onClick={() => this._goFirstMenu(1)} style={styles.navItem}>
                                <img style={styles.menuIcon}  src='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NDBBMjRGMzkyREUxMUU3QTI4NEQwNjY3MzMwMzk4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NDBBMjRGNDkyREUxMUU3QTI4NEQwNjY3MzMwMzk4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MEEyNEYxOTJERTExRTdBMjg0RDA2NjczMzAzOTgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ0MEEyNEYyOTJERTExRTdBMjg0RDA2NjczMzAzOTgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+u0swfwAAA1VJREFUeNrsm0loFEEUhnu2GFRcQDDxEowLIiLoJRIX5qbHKJiIGgXNQQIGEUVP4sGDioILCIoejKjxokhOirgkXvQkiJKoGSJGRdQYB3GbieX/mCc0k0msTlf3dHXXD98hQ3dPvX+qq169qsSEEFaUFbciLmNA1A1Ilul7Z4CNYCH//RxcAZ+iYEAt2AV2gBR/lgNzwRnQ42traBbwkcWgQ4yum2Cpn23yM/gloFP8X518bWgMiIN6yeDtJqwEKd0NoAAawBPhXL2g0WsTvAw+ATaAHjF+0b1NXprgVfCVYDN4IdyLesJ2fqYWBiTBAfBZqNMgPzMVdAMo+IMgK9Qry89OqmxzTOFqcCrYC3aCKR6lLV/BWXASvFPxQFUGVIPDYB2Y7HHu9h3cYLPfByETrAbtIC/8U46/s6rcY0Adp7Z+Bv9PeU6YlpXLAPriB6L86nJjgpvgu0Rw1A3SfswCVEBZD1rBqoDVNh6DE+Aa+OPFIEjzbzPoF8FVP7cxofoVoDR0C8iI4Iva2AImqnoFpoNt3O1rNSn1UX5wipOmL24SIQp+NycdEzSrd/4Ex8BxMDSemiAVLtvAHg2DJ1Vy22PgNPjgpAfM4ZubwSTNK980I1wEh0BGxoAacAQ0snthUQfYD16PtTFCwR8NYfCkJo5ttj1uew9YzvX6tSAR0o2gYXCXB8ZbxQZ0g/qIbJfdBquLX4F5EdorrCk1BtzhikvY9ZFfgxFjwHwe/GiwWBTS4PvABV4wZUpNg9PYiJm2jUvqJQ1gk2bB3uMd50FbPkC//jN7ZlicCQ7xsnJEvqChAVfBeZn1vYx+a9jdpQqmsgbomBdUqDQgtPLzhAgNQgM8+uZKpNqCB94FoCqMBvTxiowG2R+jGEBL2DTYxzl7qAyg6add4rpesMYvA+I+vwJeXKuNAYGUMcAYYAwwBhgDjAHGAGOAMcAYYAwYUyq2yWI6GzDsc7sqFDwjodIAKie/ddmgNw6udXsM9hvIylwoWxB5Cc6BFqtwLNZJD6OGPATXHdxH9fxZYIVVOHfspD5A1eDL4KnUeyl5TC7GDaIDE2n+TOZGOlnyyiocUHgE8pJB0A9TB7Zahf8m++VgjLkPLnEvEqoMMNOgMcAYEE79FWAARK1YRyvYuYYAAAAASUVORK5CYII='/>
                                主页
                            </a>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <a onClick={() => this._goFirstMenu(2)} style={styles.navItem}>
                                <img style={styles.menuIcon}src='data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADr0lEQVR4Xu2bjXHUMBCFdyuADkgqIKmApAM6ACogVADpgFQAVEBSQZIKSCqAVEBSwWNexmZ8tmVJ1kry3XlnMjeTs8/aT6v9k6yy56J7rr+sAFYL8BAA8E5ETkTkqPnbBmY3InInIjeqejU1YOcSAEClf4rIy23QeGKMBPFBVfk5kFEAjfLXW654d/iPInI6BsEF4O8OzHx//rgcTvv/HAAA8F5Evu3Q7HdVoRXQP/yXMQDfRYSObxflXFW/+AD8yujtn0TkUkT+0EN3BkJHS6f7VkReZSR/q6p8zqQFINMABvTHntMswa8i8iLDOKoA4KyfuMKQAwJzDlqINYQ7VT0ubQGfVJUzGiW5QrGqbvi9MSdouQQeVPUgSvPOxQDMHXJpAMzAqMQsAUCnyGzUTEoDOFRVevzZAoD3m0WGkgCeVDW5jgBAZ/hmNsHejSUBDELOHCUAMHH5POfesXtKArhSVa7hJNlmAEGJj4+OdTgsaQErgH7h4ZttR1bI3N2sN1HCAtiCei54+qXnTACMJHSEbGokO8MSAExM32ENyVnqCqBALfBDVdlVMhWraFDCArhWmQLz00wAsKL8mPqDJQBwjOciwiLoIMURAmAlSaUvRISdquTUuhSAdqJGO7Ghs2idBfK5pQHwmYNObAgAAJzt3xaz3n1eDQDMBw5DlO5ek2P2a1kAnxvVFgPAniDXvLnUsAAq4dya6mvYmD5TX0Iwl1oAWgjHvg4RAO5KmecRLcmaADiGyaiQa93XdoJ9M3ZGBQDZN2VrW8BkWASQXOz4nMYSADg7xQB4iOG1T4mU72sDuFDVM5cCOfYB+s+qCSCoT9BAYB1hvS/4zCIngIemE8RuUFceYzZG2xubQqi/rcbcgCFy9jLJAYC7v2cpW2Cxa7rpDbA8jgZhDeCehxp8yU2sgiHXNxkjIUSdZrEEwJk/qqF8F1Bs5LAEkLTzGzLLIdc0voJlc5BYAUja9w8aacRFMecIrABMxvOIsZtcGpM/WAGIqu9NtJz4kZhlYAVgVpsrJ4jQOmIFYLQxsq0WcK+qG52muafEFhECO2kzO8jsJfgk6KBkyJkc9vhY1SUdgPKNNvD7dvc4pIc4OLWyHpbuU46JqYEztKTL2JTdeHPE9cKE6dm8hRAYPbXmApDrsHItFs7CbeqlKUJgZya65q6lpeO5t2yiuKpW74uTTfOBB5XaFw3YpTE7umoMi10pLl9GKa71S183ygvAeICL+7kVwOKmpPCA9t4C/gFlEuRQZNKQBgAAAABJRU5ErkJggg=='/>
                                会员管理
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>

                <div>
                    <Dropdown overlay={menuPreview} trigger={['click']}>
                        <a className="ant-dropdown-link" href="javascript:;">
                            &nbsp;<Icon type="eye-o"/>&nbsp;预览&nbsp;
                        </a>
                    </Dropdown>

                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="javascript:;">
                            <Icon type="user"/> {accountName} <Icon type="down"/>
                        </a>
                    </Dropdown>
                </div>

            </Header>
        );
    }


    /**
     * 一级菜单的点击事件
     * @param i
     */
    _goFirstMenu = (i) => {
        // // 缓存中记录当前选中的一级菜单
        // sessionStorage.setItem(cache.FIRST_ACTIVE, i);
        // this.setState({firstActive: i});
        // this.props.onFirstActiveChange();//让父级告诉兄弟组件,选中的一级菜单变化了
        //
        // const menus = this.state.allGradeMenus;
        // let url = '';
        // if (menus.getIn([i, 'url'])) {
        //     //如果一级菜单本身就有url,则直接跳转该url
        //     url = menus.getIn([i, 'url'])
        // } else {
        //     //查找一级菜单下面的第一个url(即 一级菜单的url默认为其子集中的第一个url)
        //     const secMenus = menus.get(i).get('children');
        //     if (secMenus && secMenus.size > 0) {
        //         secMenus.some(secMenu => {
        //             if (secMenu.get('url')) {
        //                 url = secMenu.get('url');
        //                 return true;
        //             } else {
        //                 const thiMenus = secMenu.get('children');
        //                 if (thiMenus && thiMenus.size > 0) {
        //                     return thiMenus.some(thiMenu => {
        //                         if (thiMenu.get('url')) {
        //                             url = thiMenu.get('url');
        //                             return true;
        //                         }
        //                         return false;
        //                     });
        //                 }
        //             }
        //             return false;
        //         });
        //     }
        // }
        // history.push(url);
    }


    /**
     * 退出登录
     */
    _handleLogout = () => {
        // const accountName = JSON.parse(sessionStorage.getItem(cache.LOGIN_DATA)).accountName
        // localStorage.removeItem(cache.LOGIN_DATA);
        sessionStorage.removeItem("B3-platform@login");
        // sessionStorage.removeItem(cache.SYSTEM_BASE_CONFIG)
        // sessionStorage.removeItem(cache.LOGIN_MENUS)
        // sessionStorage.removeItem(cache.LOGIN_FUNCTIONS)
        // sessionStorage.removeItem(cache.FIRST_ACTIVE)
        // sessionStorage.removeItem(cache.SECOND_ACTIVE)
        // sessionStorage.removeItem(cache.THIRD_ACTIVE)
        // localStorage.removeItem(cache.DATA_BOARD.concat(accountName))
        // history.push('/login');
        this.context.router.history.push("/login");
    };

}

const styles = {
    logoBg: {
        width: 140,
        height: 44,
        backgroundColor: '#ffffff7d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        display: 'block',
        width: 120,
        maxHeight: 40
    },
    navMenu: {
        marginLeft: 50
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
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

export default MyHeader;
