import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SongList from '../SongList/SongList';
import AddSongDialog from '../AddSongDialog/AddSongDialog';
import { useParams } from "react-router-dom";
import useAlbumById from '../../hooks/api/useAlbumById';
import withLoading from '../../../shared/hocs/withLoading';
import withError from '../../../shared/hocs/withError';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
    },
});

export default function Album() {

    let { id } = useParams();

    const { loading, error, album } = useAlbumById(id)

    const AlbumComponent = () => {
        const classes = useStyles();
        return (
            <div>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={album.name}
                            height="140"
                            image={album.img}
                            title={album.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {album.artist}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {album.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent>
                        <SongList songs={album.songs}></SongList>
                    </CardContent>
                </Card>
                <AddSongDialog></AddSongDialog>
            </div>
        );
    }

    const WithLoadingComponent = withLoading(loading, AlbumComponent)
    const WithErrorAndLoadingComponent = withError(`Error getting album id ${id}`, error, WithLoadingComponent)

    return <WithErrorAndLoadingComponent />

}

