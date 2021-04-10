import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { Link } from "react-router-dom";

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

const albums = [
    {
        id: '1',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41X8BFZD2WL.jpg',
        artist: 'Bon Jovi',
        album: 'Runnaway',
    },
    {
        id: '2',
        img: 'https://images-na.ssl-images-amazon.com/images/I/818W3I9zksL.jpg',
        artist: 'Journey',
        album: 'Greatests Hits',
    },
    {
        id: '3',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71wO5zSNFNL._SX466_.jpg',
        artist: 'Trivium',
        album: 'Ascendancy',
    },
    {
        id: '4',
        img: 'https://www.todorock.com/wp-content/uploads/2019/09/judas-priest-painkiller-grande-1200x900.jpg',
        artist: 'Judas Priest',
        album: 'Painkiller',
    },
    {
        id: '5',
        img: 'https://http2.mlstatic.com/D_NQ_NP_756859-MLC42530810011_072020-O.jpg',
        artist: 'Dio',
        album: 'Holy Diver',
    },
    {
        id: '6',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71uysK6I3pL._SL1060_.jpg',
        artist: 'Nightwish',
        album: 'Once',
    },
    {
        id: '7',
        img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/5/9/0/9/31266.jpg',
        artist: 'Five Finger Death Punch',
        album: 'Greatests hits',
    },
    {
        id: '8',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81gcQXWNsYL._SL1425_.jpg',
        artist: 'Disturbed',
        album: 'Inmortalized',
    }
]
export default function AlbumList() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Albumes</ListSubheader>
                </GridListTile>
                {albums.map((album) => (
                    <GridListTile key={album.img}>
                        <img src={album.img} alt={album.album} />
                        <GridListTileBar
                            title={album.artist}
                            subtitle={<span>Album: {album.album}</span>}
                            actionIcon={
                                <Link to={`/album/${album.id}`}>
                                    <IconButton aria-label={`View songs of ${album.album}`} className={classes.icon}>
                                        <LibraryMusicIcon />
                                    </IconButton>
                                </Link>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}