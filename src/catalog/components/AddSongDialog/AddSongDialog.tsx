import React from 'react';
import AcceptDialog from '../../../shared/components/AcceptDialog/AcceptDialog';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../shared/redux/store';
import { closeDialog } from '../../../shared/redux/ducks/dialog.duck';
import { addSong } from '../../../shared/redux/ducks/my-queque.duck';

export default function AddSongDialog() {

  const dialog = useSelector((state: RootState) => state.dialog)
  const dispatch = useDispatch()

  const handleAccept = (payload) => {
    dispatch(addSong(payload))
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