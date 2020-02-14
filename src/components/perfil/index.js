import React from 'react'
import './perfil.css'

import Snackbar from '@material-ui/core/Snackbar';

const Perfil = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {  
        setTimeout(function(){ setOpen(false); }, 4000);
    };

    return (
        <div className="perfil">
            <Snackbar 
                onLoad={handleClose()}
                open={open}  
                message="Perfil" 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            />
        </div>
    )
}

export default Perfil