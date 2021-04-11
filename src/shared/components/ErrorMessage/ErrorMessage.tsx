import React from 'react'
import { Card, Avatar, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    cardContent: {
        flexGrow: 1
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}));

export default function ErrorMessage({ error, message }) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Avatar
                alt="Profile Image"
                src="./patrick-star.jpg"
                className={classes.avatar}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {error}
                </Typography>
                <Typography>{message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">HOME</Button>
            </CardActions>
        </Card>
    )
}