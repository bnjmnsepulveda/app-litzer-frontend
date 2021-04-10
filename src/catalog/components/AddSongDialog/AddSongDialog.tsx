import React from 'react';
import AcceptDialog from '../../../ui/AcceptDialog/AcceptDialog';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { closeDialog } from '../../../redux/ducks/dialog.duck';

export default function AddSongDialog() {

  const dialog = useSelector((state: RootState) => state.dialog)
  const dispatch = useDispatch()

  const handleAccept = (payload) => {
    console.log('accept', payload)
    dispatch(closeDialog())
  }

  const handleCancel = () => dispatch(closeDialog())

  const handleClose = () => dispatch(closeDialog())

  return (
    <div>
      <AcceptDialog dialog={dialog} accept={handleAccept} cancel={handleCancel} close={handleClose} ></AcceptDialog>
    </div>
  );
}