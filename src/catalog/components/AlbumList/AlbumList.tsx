import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { Link } from "react-router-dom";
import useAlbum from './../../hooks/api/useAlbum';
import withLoading from '../../../shared/hocs/withLoading';
import withError from '../../../shared/hocs/withError';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function AlbumList() {

    const { loading, error, albums } = useAlbum()

    const AlbumListComponent = () => {
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Albums</ListSubheader>
                    </GridListTile>
                    {albums.map((album) => (
                        <GridListTile key={album.img}>
                            <img src={album.img} alt={album.name} />
                            <GridListTileBar
                                title={album.artist}
                                subtitle={<span>Album: {album.name}</span>}
                                actionIcon={
                                    <Link to={`/album/${album.id}`}>
                                        <IconButton aria-label={`View songs of ${album.name}`} className={classes.icon}>
                                            <LibraryMusicIcon />
                                        </IconButton>
                                    </Link>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }

    const WithLoadingComponent = withLoading(loading, AlbumListComponent)
    const WithErrorAndLoadingComponent = withError('Error getting albums', error, WithLoadingComponent)

    return <WithErrorAndLoadingComponent />

}

export default AlbumList