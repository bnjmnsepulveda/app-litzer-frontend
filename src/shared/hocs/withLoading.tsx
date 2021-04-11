import React, { ComponentType } from 'react';
import { LinearProgress } from '@material-ui/core';

const withLoading = (loading, Component: ComponentType<any>) => {
    const Loading = props => {
        if (loading) {
            return <LinearProgress />
        }
        return <Component {...props} />
    }
    return Loading
}

export default withLoading;