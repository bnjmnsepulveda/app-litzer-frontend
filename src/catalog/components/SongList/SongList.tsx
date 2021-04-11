import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SongItem from '../SongItem/SongItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxHeight: 300,
            overflow: 'auto',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export default function SongList({ songs }) {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            {songs.map(song => <SongItem key={song.id} song={song} />)}
        </List>
    );
}
