import React from 'react'

function Layout({ children }: any) {
    let name = 'Dev_Danny';
    let picture = '/MetaMask.png';


    return (
        <div className='grid place-items-center h-screen bg-gray-50'>
            <div>
                <img src={picture} alt='Profile Picture' className='w-40 h-40' />
                <h3 className='text-lg font-sans font-medium mt-2'>Welcome, <strong className='bg-gray-200 p-[2px] rounded-md'>{name}</strong></h3>
            </div>
            {children}
        </div>
    )
}

export default Layout