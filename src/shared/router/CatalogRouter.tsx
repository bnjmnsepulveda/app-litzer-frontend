import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AlbumList from '../../catalog/components/AlbumList/AlbumList'
import Album from '../../catalog/components/Album/Album'

export default function CatalogRouter() {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" >
                    <Redirect to="/album" />
                </Route>
                <Route exact path="/album">
                    <AlbumList></AlbumList>
                </Route>
                <Route path="/album/:id">
                    <Album></Album>
                </Route>
            </Switch>
        </React.Fragment>
    )

}