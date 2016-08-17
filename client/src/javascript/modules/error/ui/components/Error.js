import React, { PropTypes } from 'react';

function Error(props) {
    return (
        <div className="alert alert-danger text-center">
            {props.children}: {props.error.message}
        </div>
    );
}

Error.propTypes = {
    error: PropTypes.object.isRequired,
    children: PropTypes.string
};

export default Error;