import React from 'react'
import './table.css'

import Snackbar from '@material-ui/core/Snackbar';

const Table = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {  
        setTimeout(function(){ setOpen(false); }, 4000);
    };

    return(
        <div className="table">
            <div className="content">
            </div>
            <Snackbar 
                onLoad={handleClose()}
                open={open}  
                message="Table" 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            />
        </div>
    )
}

export default Table