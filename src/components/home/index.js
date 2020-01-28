import React from 'react'
import './home.css'

import Snackbar from '@material-ui/core/Snackbar';

const Home = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {  
        setTimeout(function(){ setOpen(false); }, 4000);
    };

    return(
        <div className="home">
            <div className="content">
                <Snackbar 
                    onLoad={handleClose()}
                    open={open} 
                    message="Home" 
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                />
            </div>
        </div>
    )
}

export default Home