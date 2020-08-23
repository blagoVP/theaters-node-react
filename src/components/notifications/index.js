import React from 'react';

const ErrorNotification = (props) => {
    return (
        <section className="notifications error">
            <p>{props.message}</p>
        </section>
    )
}

export default ErrorNotification;