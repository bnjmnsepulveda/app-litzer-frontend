import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { useDispatch } from 'react-redux';
import { openDialog } from '../../../redux/ducks/dialog.duck';

export default function SongItem({ song }) {

    const dispatch = useDispatch()

    const handleClick = (song) => dispatch(openDialog({
        title: 'Add to Playlist',
        message: `Do you want to add ${song.name} to queque playlist`,
        payload: song
    }))

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar >
                    <MusicNoteIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={song.name} secondary={song.duration} onClick={e => handleClick(song)} />
        </ListItem>
    )
}
