import React, { useState } from 'react'

function Post() {
    let picture = '/MetaMask.png';
    let [text, setText] = useState('');

    function handlePost() {
        console.log('This is Dev_Danny on the back-end')
    }
    return (
        <div className='grid place-items-center h-screen bg-gray-50'>
            <div className='border-2 border-gray-400 shadow-lg rounded-md w-[725px] h-[450px] relative'>
                <div className='absolute -top-28 -left-4'>
                    <img src={picture} alt='Profile Picture' className='w-40 h-40' />
                </div>
                <section className='mt-4'>
                    <div className='px-6 py-2 border-b-2 border-stone-300'>
                        <h2 className='font-sans font-semibold text-lg'>Create Post</h2>
                    </div>
                    <div className='px-6 py-2 border-b-2 flex justify-between border-stone-300'>
                        <ul className='flex space-x-2 text-fuchsia-500 font-sans font-semibold'>
                            <li><button>Bold</button></li>
                            <li><button>Italicics</button></li>
                            <li><button>Markdown</button></li>
                        </ul>
                        <span className='px-2 py-1 rounded-md bg-fuchsia-600 text-white font-sans font-semibold flex items-center gap-2'><i>★</i>Beta</span>
                    </div>
                </section>
                <section className='px-6 mt-3 w-full'>
                    <textarea className='py-2 px-3 outline-none focus:border-blue-500 focus:border-2 w-full font-sans rounded-md shadow-sm border' placeholder="What's on your mind?" value={text} onChange={(e) => setText(e.target.value)} autoComplete='off' autoCorrect='off' cols="30" rows="10" style={{ resize: 'none' }}></textarea>
                </section>
                <section>
                    <div className='px-6 py-1 flex justify-between'>
                        <ul className='flex space-x-2 text-fuchsia-500 font-sans font-semibold'>
                            <li><button>Image</button></li>
                            <li><button>Gif</button></li>
                            <li><button>Link</button></li>
                        </ul>
                        <button onClick={handlePost} className='px-3 py-1 font-sans text-white font-semibold bg-fuchsia-600 rounded-md hover:bg-fuchsia-300 transition-colors'>Post</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Post