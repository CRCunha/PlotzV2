import React from 'react'
import './home.css'

import ChartStackedArea from '../chartStackedArea/'
import ChartFillByValue from '../chartFillByValue/'
import ChartSimpleBar from '../chartSimpleBar/'
import ChartComposed from '../chartComposed/'
import ChartShapePie from '../chartShapePie/'

import Snackbar from '@material-ui/core/Snackbar';

const Home = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {  
        setTimeout(function(){ setOpen(false); }, 4000);
    };

    return(
        <div className="home">
            <div className="content">
                <ChartStackedArea/>
                <ChartFillByValue/>
                <ChartSimpleBar/>
                <ChartComposed/>
                <ChartShapePie/>
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