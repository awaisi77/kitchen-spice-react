import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {callApi} from "../../../services/api";
import {withState} from "../../common/with-state";
import {Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import CustomGridButton from "../../common/CustomGridButton";
import OrderDetailDialog from "../../demoes/orders/OrderDetailDialog";
import {toast} from "react-toastify";
import axios from "axios";
import '@progress/kendo-theme-default/dist/all.css';
import CustomButton from "../../common/CustomButton";
//let userOrderApi = "https://pos.lahorebroast.com/api/" +"user/order/requests";
let userOrderApi = "https://pos.kitchennspicemarket.com/pos/public/index.php/api/user/order/requests";

const StatefulGrid = withState(Grid);
class UserOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                user: null,
                order: [],
                status: false,
            }
            , skip: 0, take: 10,
            dataItemInEdit: undefined
        }
    }

    handleSelect = (e) => {
        console.log(e)
        this.setState({selected: e.selected});
        console.log(this.state)
    }
    expandChange = (event) => {
        event.dataItem.expanded = !event.dataItem.expanded;
        this.forceUpdate();
    }
    view = (dataItem, e) => {
        this.setState({dataItemInEdit: dataItem});
    }
    cancel = () => {
        this.setState({dataItemInEdit: undefined});
    }
    componentDidMount() {
        let user = localStorage.getItem('user');
        if (user) {
            console.log('user:', user);
            let {data} = {...this.state};
            data.user = JSON.parse(user);
            //  data.status = true;
            const payload = {
                url: userOrderApi + '?id=' + data.user.id,
                method: 'GET'
            };
            console.log('payload:',payload)
            axios(payload).then(response => {
                console.log('response',response)
                // let {data} = {...this.state};
                if (response.data.statusCode === 200 && response.data.status === true) {
                    console.log(response.data.data[0])
                    data.order = response.data.data;
                    data.status = response.data.status;
                    this.setState({data})
                    toast.success( "Previous orders fetched successfully.");
                } else {
                    toast.error('No previous orders found for user.');
                }
                console.log('state : ', this.state)
            }).catch(
                (err) => {
                    // this.props.dispatch(spinner(false))
                    console.log('Error:'+err.toString())
                    toast.error('Error'+err);
                    toast.error('No previous orders found for user.');
                });
            //this.setState(data)
            console.log('state', this.state);
        }

    }

    render() {
        let {user, status, order} = {...this.state.data}
        const MyEditCommandCell = props => <CustomButton {...props}
           view={this.view}
        />;
        let dataGrid = this.state.data.status ? (
            <StatefulGrid
                style={{maxHeight: '500px', color: 'black'}}
                data={this.state.data.order}
                take={10}
                filterable={false}
                sortable={true}
                pageSizes={true}
               /* detail={OrderDetail}
                expandField="expanded"
                onExpandChange={this.expandChange}*/
            >
              {/*  <Column field="id" width={100} title="Order No"/>
                <Column field="created_at" width={150} title="Order Date & Time"/>
                <Column field="cart_total" width={100} title="Total Price" />
                <Column field="cart_qty"  width={100} title="Quantity" />
                <Column field="status" width={100} title="Order Status"/>
                <Column field="branch.branch_name"  width={100} title="Branch" />
                <Column field="area.area_name" width={100} title="Area" />
                <Column field="city.name"  width={100} title="City" />
                <Column field="address"width={100} title="Address" />*/}
                <Column field="id" title="Order#"/>
                <Column field="created_at"  title="Date & Time"/>
                <Column field="cart_total"  title="Total Price" />
                <Column field="cart_quantity"  title="Quantity" />
                <Column field="order_status" title="Status"/>
               {/* <Column field="branch.branch_name"  title="Branch" />
                <Column field="area.area_name"  width={100}  title="Area" />
                <Column field="city.name"  title="City" />*/}
                <Column field="address"  width={200}  title="Address" />

                <Column title="Action"  cell={MyEditCommandCell}/>


            </StatefulGrid>) : '';
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        {dataGrid}
                        {this.state.dataItemInEdit && <OrderDetailDialog dataItem={this.state.dataItemInEdit}
                                                                      cancel={this.cancel}/>}
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        // permissions: state.permissions
    };
};
export default connect(mapStateToProps)(UserOrder);
