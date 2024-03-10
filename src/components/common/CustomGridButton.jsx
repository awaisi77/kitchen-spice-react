import React from 'react';
import {GridCell} from '@progress/kendo-react-grid';

const CustomGridButton = (view) => {
    return class extends GridCell {
        state = {
            dialogVisibility: false,
        };
        toggleDialog = (e) => {
            // e.preventDefault();
            this.setState({
                dialogVisibility: !this.state.dialogVisibility
            });

            view(this.props.dataItem);
        }
        render() {
            return (
                <td className='gridAction'>
                    <div class="btn-group btn-group-sm" role="group" aria-label="">
                    <button type="button" className="btn btn-link" tooltip="View" flow="down"
                            onClick={this.toggleDialog} >
                       View
                    </button>
                    </div>
                </td>

            );
        }
    };
}

export default CustomGridButton;