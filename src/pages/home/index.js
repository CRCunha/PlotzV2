import React from "react";
import "./home.css";

import Snackbar from "@material-ui/core/Snackbar";
import ChartStackedArea from "../../components/chartStackedArea";
import ChartFillByValue from "../../components/chartFillByValue";
import ChartSimpleBar from "../../components/chartSimpleBar";
import ChartComposed from "../../components/chartComposed";
import ChartScatter from "../../components/chartScatter";


const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setTimeout(() => { setOpen(false); }, 4000);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="home">
      <div className="content">
        <ChartStackedArea />
        <ChartFillByValue />
        <ChartSimpleBar />
        <ChartComposed />
        <ChartScatter />
      </div>
      <Snackbar
        onLoad={handleClose()}
        open={open}
        message="Home"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </div>
  );
};

export default Home;
