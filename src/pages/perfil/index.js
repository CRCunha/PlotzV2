import React from "react";
import "./perfil.css";

import Snackbar from "@material-ui/core/Snackbar";
import CircularProgres from "../../components/circularProgres";

const Perfil = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setTimeout(() => { setOpen(false); }, 4000);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="perfil">
      <div className="container">
        <CircularProgres/>
      </div>
      <Snackbar
        onLoad={handleClose()}
        open={open}
        message="Perfil"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </div>
  );
};

export default Perfil;
