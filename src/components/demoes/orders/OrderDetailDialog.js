import React from 'react';
import {Dialog, DialogActionsBar} from '@progress/kendo-react-dialogs';

const teams = [{name: 'abc', id: '1'}, {name: 'cd', id: '2'}];

class OrderDetailDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataItemInEdit: this.props.dataItem || null
            , teams: this.props.teams,
            roles: this.props.roles,
            formInput: {
                teamId: {id: null, name: null},
            },
        };

        console.log('In UserFormDialog construtor props:', this.props)
    }

    handleSave = () => {

        let {save, cancel} = this.props;
        cancel();
        let {dataItemInEdit} = this.state;
        save(dataItemInEdit);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.handleSave();
    }

    onDialogInputChange = (event) => {
        let target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.props ? target.props.name : target.name;

        const edited = this.state.dataItemInEdit;
        edited[name] = value;

        this.setState({
            dataItemInEdit: edited
        });
    }

    componentDidMount() {

    }
    render() {
        const dataItem = this.props.dataItem;
        const {dataItemInEdit} = {...this.state};
        console.log(dataItem)
        let {cart} = {...dataItem};
        console.log('order: ', cart)
        let parseJson = JSON.parse(dataItem.cart);
        let cartItem = Object.values(parseJson).map((item) => {
                return (<tr>
                    <td>{item.product_name}</td>
                    <td>{item.quantity}</td>
                    <td>USD {parseInt(item.unit_price_inc_tax)}</td>
                    <td>USD {item.total}</td>
                </tr>)
            });

        return (
            <Dialog
                onClose={this.props.cancel} title={"Order Details"}
            >
                <div className="row">
                    <div className="col-lg-12">
                        <p className="pull-right"></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <b>Order No:</b>{dataItem.id} <br/>
                        <b>Order Status:</b>{dataItemInEdit.status}
                        <br/>
                    </div>
                    <div className="col-sm-4">
                        <b>Name:</b>{dataItemInEdit.customer.name}<br/>
                        <b>Address:</b>{dataItemInEdit.customer.shipping_address}<br/>
                        <br/>
                    </div>
                    <div className="col-sm-4">
                        <strong>Date:</strong>
                        <b>Date :</b>{dataItem.created_at}<br/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <h4>Products:</h4>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                        <div   style={{overflow:"auto",height:200 }}>
                            <table className="table bg-gray">
                                <tbody>
                                <tr className="bg-light">
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Subtotal</th>
                                </tr>
                                {cartItem}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <h4>Shipping Details:</h4>
                    </div>
                    <div className="col-lg-8 col-sm-12 col-xs-12">
                        <div className="table-responsive">
                            <table className="table bg-gray">
                                <tr className="bg-green">
                                   {/* <th>Branch</th>
                                    <th>Area</th>
                                    <th>City</th>*/}
                                    <th>Address</th>
                                    <th>Instructions</th>
                                </tr>

                                <tr>
                                 {/*   <td>{dataItemInEdit.branch.branch_name}</td>
                                    <td>{dataItemInEdit.area.area_name}</td>
                                    <td>{dataItemInEdit.city.name}</td>*/}
                                    <td>{dataItemInEdit.address}</td>
                                    <td>{dataItemInEdit.instructions}</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <div className="table-responsive">
                            <table className="table bg-gray">
                                <tr className="bg-green">
                                 {/*   <th>Coupon</th>*/}
                             {/*       <th>Discount Amount</th>
                                    <th>Before Discount</th>*/}
                                    <th>Total</th>
                                </tr>

                                <tr>
                                 {/*   <td>{dataItemInEdit.coupon_code}</td>*/}
                                 {/*   <td>{discount}
                                       </td>
                                    <td>{dataItemInEdit.cart_total}</td>*/}
                                    <td>{dataItemInEdit.cart_total}</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>

            </Dialog>
    );
    }
    }

    export default OrderDetailDialog;