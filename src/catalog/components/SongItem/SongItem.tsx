import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function SongItem({ song }) {

    const handleClick = (e: any) => {
        console.log(song)
    }

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar >
                    <MusicNoteIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={song.name} secondary={song.duration} onClick={handleClick} />
        </ListItem>
    )
}
