import React, { useState } from 'react'
import { useRouter } from 'next/router';

function Payment() {
    let name = 'Dev_Danny';
    let picture = '/MetaMask.png';
    let [number, setNumber] = useState('');
    let router = useRouter();

    const overlayStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${number}, 1fr)`,
        gridTemplateRows: `repeat(${number}, 1fr)`,
        gap: '1px',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        background: 'rgba(0,0,0,0.5)'
    }

    function handlePayment() {
        router.push('./amount_page')
        console.log('This is Dev_Danny on the back-end')
    }
    return (
        <div className='grid place-items-center h-screen bg-gray-50'>
            <div>
                <div className='relative'>
                    <img src={picture} alt='Profile Picture' className='w-40 h-40' />
                    <div style={overlayStyle}></div>
                </div>
                <h3 className='text-lg font-sans font-medium mt-2'>Welcome, <strong className='bg-gray-200 p-[2px] rounded-md'>{name}</strong></h3>
            </div>
            <h2 className='md:text-7xl text-center font-sans px-4'>In how many fractions do you want to divide it:</h2>
            <div>
                <input type='number' min={1000} placeholder='10' inputMode='numeric' step={100} value={number} className='py-2 px-3 w-[250px] border shadow rounded-lg font-sans text-center outline-none focus:border-blue-500 focus:border-2' onChange={(e) => setNumber(e.target.value)} />
            </div>
            <button onClick={handlePayment} className='py-2 px-3 w-[120px] rounded-lg hover:shadow-lg hover:scale-105 
        bg-[#0e76fd] text-white transition-transform font-sans font-semibold
         flex items-center gap-3'>Continue
                <img className='w-6 h-6' src='/smiling_emoji.png' alt='' />
            </button>
        </div>
    )
}

export default Payment