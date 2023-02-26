import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Layout from '@/components/layout';

function Amount() {
    let name = 'Dev_Danny';
    let picture = '/MetaMask.png';
    let [number, setNumber] = useState('');
    let router = useRouter()



    function handlePayment() {
        router.push('./post')
        console.log('This is Dev_Danny on the back-end')
    }

    function handleTextChange(e: any) {
        let currentValue = e.target.value
        setNumber(currentValue)
    }
    return (
        <Layout>

            <h2 className='md:text-7xl text-center font-sans px-4'>How much of them do you want to sell to your frens:</h2>
            <div>
                <input type='number' min={1000} placeholder='10%' step={100} value={number} className='py-2 px-3 w-[250px] border shadow rounded-lg font-sans text-center outline-none focus:border-blue-500 focus:border-2' onChange={handleTextChange} />
            </div>
            <button onClick={handlePayment} className='py-2 px-3 rounded-lg hover:shadow-lg hover:scale-105 
    bg-[#0e76fd] text-white transition-transform font-sans font-semibold
    flex items-center gap-3'>Almost There !</button>
        </Layout>
    )
}

export default Amount