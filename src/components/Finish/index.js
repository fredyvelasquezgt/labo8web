import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";

const Finish = ({ handleRestart, showModal, bestScore, moves }) => {
  return (
    <div>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2>Memoria</h2>
        <DialogTitle id="alert-dialog-title">¡Juego completado!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Realizaste {moves} movimientos. Tu mejor punteo es {bestScore}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Reiniciar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
