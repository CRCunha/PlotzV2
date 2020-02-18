import React from "react";
import "./home.css";

import Snackbar from "@material-ui/core/Snackbar";
import ChartStackedArea from "../chartStackedArea";
import ChartFillByValue from "../chartFillByValue";
import ChartSimpleBar from "../chartSimpleBar";
import ChartComposed from "../chartComposed";
import ChartScatter from "../chartScatter";


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
