import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Layout from '@/components/layout';

function About() {

    let router = useRouter()

    function handlePayment() {
        router.push('./profile/payment')
        console.log('This is Dev_Danny on the back-end')
    }
    return (
        <Layout>

            <h2 className='md:text-7xl text-center font-sans px-4'>Ready to raise some $Capital from your Ferns?</h2>
            <button onClick={handlePayment} className='py-2 px-7 w-[120px] rounded-lg hover:shadow-lg hover:scale-105 
            bg-[#0e76fd] text-white transition-transform font-sans font-semibold
            flex items-center gap-4'>Yay
                <img className='w-6 h-6' src='/smiling_emoji.png' alt='' />
            </button>
        </Layout>
    )
}

export default About