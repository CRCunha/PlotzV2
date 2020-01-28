import React from 'react'
import './home.css'

import PaperGraphic from '../paperGraphic/'
import Paper from '../paper/'


import Snackbar from '@material-ui/core/Snackbar';

const Home = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {  
        setTimeout(function(){ setOpen(false); }, 4000);
    };

    return(
        <div className="home">
            <div className="content">
                <PaperGraphic/>
                <Paper/>
                <Paper/>
                <Paper/>
                <Paper/>
            </div>
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
    )
}

export default Home