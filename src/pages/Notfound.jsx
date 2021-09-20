import React, { useEffect } from 'react'

const Notfound = () => {
    useEffect(() => {
        document.title = 'Not Found - Instagram';
    }, [])
    return (
        <div className="app bg-gray-background">
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl">
                    Not Found!
                </p>
            </div>
        </div>
    )
}

export default Notfound
