import React from "react";
import "./table.css";

import Snackbar from "@material-ui/core/Snackbar";
import CircularProgres from "../../components/circularProgres";

const Table = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setTimeout(() => { setOpen(false); }, 4000);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="table">
      <div className="content">
        <CircularProgres/>
      </div>
      <Snackbar
        onLoad={handleClose()}
        open={open}
        message="Table"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </div>
  );
};

export default Table;
