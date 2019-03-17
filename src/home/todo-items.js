import React,{Component} from 'react'
import { Table, Icon, Modal, Checkbox } from 'antd';

export default class TodoItems extends Component {

    // state = { visible: false }
    // showModal = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // }
    // hideModal = () => {
    //     this.setState({
    //         visible: false,
    //     });
    // }
    //
    // props: {
    //     relaxProps?: {
    //         tradeTodo: IMap
    //         employee: IMap
    //         dataBoard: IList
    //         changeDataBoard: Function,
    //         f_supplier_list_1: boolean,
    //         fOrderList001: boolean,
    //         fOrderDetail002: boolean,
    //         fOrderList003: boolean,
    //         f_goods_check_1: boolean,
    //         rolf003: boolean,
    //         rolf004: boolean,
    //         rolf005: boolean,
    //         f_customer_3: boolean,
    //         f_customer_1: boolean,
    //         f_basicSetting_0: boolean,
    //         changeInvoice: boolean,
    //         f_finance_manage_settle: boolean,
    //         todoVisible: boolean
    //     }
    // }
    // static relaxProps = {
    //     tradeTodo: 'tradeTodo',
    //     employee: 'employee',
    //     dataBoard: 'dataBoard',
    //     changeDataBoard: noop,
    //     f_supplier_list_1: 'f_supplier_list_1',
    //     fOrderList001: 'fOrderList001',
    //     fOrderDetail002: 'fOrderDetail002',
    //     fOrderList003: 'fOrderList003',
    //     f_goods_check_1: 'f_goods_check_1',
    //     rolf003: 'rolf003',
    //     rolf004: 'rolf004',
    //     rolf005: 'rolf005',
    //     f_customer_3: 'f_customer_3',
    //     f_customer_1: 'f_customer_1',
    //     f_basicSetting_0: 'f_basicSetting_0',
    //     changeInvoice: 'changeInvoice',
    //     f_finance_manage_settle: 'f_finance_manage_settle',
    //     todoVisible: 'todoVisible'
    // }


    render() {

        // const { tradeTodo, employee, dataBoard, changeDataBoard, f_supplier_list_1, fOrderList001,
        //     fOrderDetail002, fOrderList003, f_goods_check_1, rolf003, rolf004, rolf005, f_customer_3, f_customer_1, f_basicSetting_0, changeInvoice, f_finance_manage_settle, todoVisible }
        //     = this.props.relaxProps
        // const phone = employee.get('phone') || '无'

        return (
            <div>
                {/*配置主页*/}
                <a href="javascript:;" className="configHome" onClick={this.showModal}>
                    <Icon type="bars" style={{ fontSize: 16, color: '#108ee9' }} />
                    <p className="configName">配置主页</p>
                </a>
                <Modal
                    style={{ position: 'fixed', right: 0, top: 64 }}
                    title={(
                        <div>
                            <p>配置主页控制面板</p>
                            <p style={{ color: '#666', fontSize: 12, marginTop: 10 }}>数据看板</p>
                        </div>
                    )}
                    // visible={this.state.visible}
                    closable={true}
                    // onCancel={this.hideModal}
                    width="230"
                    footer={null}
                >
                    {/*{*/}
                        {/*dataBoard && dataBoard.size > 0 ? dataBoard.map((board, index) => {*/}
                            {/*board = fromJS(board)*/}
                            {/*return <div key={index} className="ProCheckDes"><Checkbox*/}
                                {/*defaultChecked={board.get('onOff')}*/}
                                {/*onChange={e => {*/}
                                    {/*const checked = (e.target as any).checked*/}
                                    {/*changeDataBoard(board.get('dataKey'), checked)*/}
                                {/*}*/}
                                {/*}>{board.get('label')}</Checkbox></div>*/}
                        {/*}) : <div style={{ textAlign: 'center' }}>暂无可配置项</div>*/}
                    {/*}*/}
                </Modal>
                <div className="flowBox" style={{ marginLeft: -5, marginRight: -5 }}>
                            <div className="homeItem pending">
                                <h3>待处理事项</h3>
                                <div>
                                            <a onClick={() => this._toSupplierList({ auditState: '0' })}
                                               className="dataItem" >
                                                <label>待审核供应商</label>
                                                <strong>1</strong>
                                            </a>
                                            <a onClick={() => this._toGoodsList()}
                                               className="dataItem" >
                                                <label>待审核商品</label>
                                                <strong>132</strong>
                                            </a>
                                            <a onClick={() => this._toOrderList({ payStatus: 'NOT_PAID' })}
                                               className="dataItem" >
                                                <label>待付款订单</label>
                                                <strong>30</strong>
                                            </a>
                                            <a onClick={() => this._toReturnList({ key: 'flowState-RECEIVED' })}
                                               className="dataItem" >
                                                <label>待退款退单</label>
                                                <strong>3</strong>
                                            </a>
                                            <a onClick={() => this._toCustomerList({ key: '0' })} className="dataItem" >
                                                <label>待审核客户</label>
                                                <strong>2</strong>
                                            </a>
                                            <a onClick={() => this._toFinanceTax({ key: '0' })} className="dataItem" >
                                                <label>待审核增票资质</label>
                                                <strong>4</strong>
                                            </a>
                                            <a onClick={() => this._toOrderTicket({ settleStatus: '0' })} className="dataItem" >
                                                <label>待结算账单</label>
                                                <strong>18</strong>
                                            </a>
                                </div>

                            </div>
                            {/*<div className="homeItem pending">*/}
                                {/*<h3>待处理事项</h3>*/}
                                {/*<div className="empty">*/}
                                    {/*<img src={require('./../images/1506413955650.jpg')} alt=""/>*/}
                                    {/*<p style={{marginTop: 20,}}>您还没有添加待处理事项</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}


                    <div className="homeItem peopleInfo">
                        <h3>员工信息</h3>
                        <div className="proPeople">
                            <div className="peopleDetails">
                                <label>员工账号</label>
                                <strong>liangxiangbin</strong>
                            </div>
                            <div className="peopleDetails">
                                <label>员工姓名</label>
                                <strong>梁祥斌</strong>
                            </div>
                            <div className="peopleDetails">
                                <label>手机号</label>
                                <strong>18297838484</strong>
                            </div>
                            <div className="peopleDetails">
                                <label>员工角色</label>
                                <strong>系统管理员</strong>
                                {/*<strong>{employee.get('accountName') === 'system' ?*/}
                                    {/*'系统管理员'*/}
                                    {/*:*/}
                                    {/*employee.get('roleName')}</strong>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    /**
     * route 订单列表
     */
    _toOrderList = (state) => {
        // history.push({
        //     pathname: "/order-list",
        //     state: state
        // })
    }

    /**
     * route 待审核供应商
     */
    _toSupplierList = (state) => {
        // history.push({
        //     pathname: "/supplier-list",
        //     state: state
        // })
    }
    /**
     * route 待审核商品
     */
    _toGoodsList = () => {
        // history.push({
        //     pathname: "/goods-check"
        // })
    }
    /**
     * route 退单列表
     */
    _toReturnList = (state) => {
        // history.push({
        //     pathname: "/order-return-list",
        //     state: state
        // })
    }
    /**
     * route 会员列表
     */
    _toCustomerList = (state) => {
        // history.push({
        //     pathname: "/customer-list",
        //     state: state
        // })
    }
    /**
     * route 增票资质
     */
    _toFinanceTax = (state) => {
        // history.push({
        //     pathname: '/finance-val-added-tax',
        //     state: state
        // })
    }
    /**
     * route 开票订单
     */
    _toOrderTicket = (state) => {
        // history.push({
        //     pathname: '/finance-manage-settle',
        //     state: state
        // })
    }

}