import React, { ComponentType } from 'react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const withError = (title, error, Component: ComponentType<any>) => {
    const Error = props => {
        if (error) {
            console.error(error)
            return (
                <ErrorMessage error={title} message={error.message}></ErrorMessage>
            )
        }
        return <Component {...props} />
    }
    return Error
}

export default withError;