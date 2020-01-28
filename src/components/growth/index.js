import React from 'react'
import './growth.css'

import Snackbar from '@material-ui/core/Snackbar';

const Growth = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {  
        setTimeout(function(){ setOpen(false); }, 4000);
    };

    return(
        <div className="growth">
            <div className="content">
                <Snackbar 
                    onLoad={handleClose()}
                    open={open}  
                    message="Growth" 
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                />
            </div>
        </div>
    )
}

export default Growth