import React from "react";
import "./growth.css";

import Snackbar from "@material-ui/core/Snackbar";

const Growth = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setTimeout(() => { setOpen(false); }, 4000);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="growth">
      <div className="content" />
      <Snackbar
        onLoad={handleClose()}
        open={open}
        message="Growth"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </div>
  );
};

export default Growth;
