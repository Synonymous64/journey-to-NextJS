import React from 'react'

const Dummy = () => {
    return (
        <>
            <style jsx global>
                {`
                .dummy{
            background-color: yellow;
                    
                }
            `}
            </style>
            <div className='dummy'>
                Hello there
            </div>
        </>
    )
}

export default Dummy