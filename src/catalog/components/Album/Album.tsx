import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SongList from '../SongList/SongList';
import AddSongDialog from '../AddSongDialog/AddSongDialog';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
    },
});

const album = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/41X8BFZD2WL.jpg',
    artist: 'Bon Jovi',
    album: 'Runnaway',
}

export default function Album() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={album.album}
                        height="140"
                        image={album.img}
                        title={album.album}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {album.artist}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {album.album}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent>
                    <SongList></SongList>
                </CardContent>
            </Card>
            <AddSongDialog></AddSongDialog>
        </div>
    );
}