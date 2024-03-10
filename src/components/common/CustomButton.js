import React from 'react';
const CustomButton = (props) => {
    const [dialogVisibility, setDialogVisibility] = React.useState(false);

    const toggleDialog = (e) => {
            // e.preventDefault()
        setDialogVisibility(!dialogVisibility);
            props.view(props.dataItem);
        }
            return (
                <td className='gridAction'>
                    <div class="btn-group btn-group-sm" role="group" aria-label="">
                        <button type="button" className="btn btn-sm btn-primary" tooltip="View" flow="down"
                                onClick={toggleDialog} >
                           View
                        </button>
                    </div>
                </td>

            );
}
export default CustomButton;