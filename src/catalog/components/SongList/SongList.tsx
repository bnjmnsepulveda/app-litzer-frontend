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

const songs = [{
    id: '1',
    name: 'Runaway',
    duration: '3:30'
},
{
    id: '2',
    name: 'Separate Ways',
    duration: '3:47'
},
{
    id: '3',
    name: 'Push it to the limit',
    duration: '3:30'
},
{
    id: '4',
    name: 'Mighty Wigs',
    duration: '3:37'
},
{
    id: '5',
    name: 'Raise on Rock',
    duration: '4:35'
},
{
    id: '6',
    name: 'Free',
    duration: '2:50'
},
{
    id: '7',
    name: '1000 Miles',
    duration: '3:53'
}
]
export default function SongList() {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            {songs.map(song => <SongItem song={song} />)}
        </List>
    );
}
