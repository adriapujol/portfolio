import React, { useEffect } from 'react';

const Contact = ({setContactHeight}) => {

    useEffect(() => {
        setContactHeight(document.getElementById("projects").offsetHeight);
    }, [setContactHeight])

    return (
        <div className="content-wrapper" id="contact">
            <div className="contact full-box bg-black">
                CONTACTE ME WITH A MASK
            </div>
        </div>
    )
}

export default Contact
