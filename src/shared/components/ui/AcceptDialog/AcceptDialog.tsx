import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface AcceptDialogProps {
    dialog: AcceptDialog;
    accept: (payload: any) => void;
    cancel: () => void;
    close: () => void;
}

export interface AcceptDialog {
    showDialog: boolean;
    title: string;
    message: string;
    payload: any;
}

const AcceptDialog: React.FC<AcceptDialogProps> = (props: AcceptDialogProps) => {

    return (
        <div>
            <Dialog
                open={props.dialog.showDialog}
                onClose={props.close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.dialog.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.dialog.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.cancel} color="primary">CANCEL</Button>
                    <Button onClick={e => props.accept(props.dialog.payload)} color="primary" autoFocus>ACCEPT</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AcceptDialog;