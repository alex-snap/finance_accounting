import React, { PropTypes } from 'react';

function Error(props) {
    return (
        <div className="alert alert-danger">{props.error.message}</div>
    );
}

Error.propTypes = {
    error: PropTypes.object.isRequired
};

export default Error;