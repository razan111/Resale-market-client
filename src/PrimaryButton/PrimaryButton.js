import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='btn btn-success'>{children}</button>
        </div>
    );
};

export default PrimaryButton;