import React from 'react';

function Block({ children }) {
    return (
        <div className="block">
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Block;