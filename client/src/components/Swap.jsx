import react from 'react';

export default function Swap()
{
    return(
        <>
        <div className="tradeBox m-auto bg-purple-700 h-80 w-96 rounded-2xl">
            <h4 className='p-2 text-2xl text-white'>Swap</h4>
            <div className='h-28  bg-purple-400 m-2 rounded-2xl p-2'>
                <section className='text-gray-500'>You Pay</section>
                <input className="text-4xl border-none outline-none placeholder-white w-20 bg-transparent" type="text" placeholder='0'/>
                <button className="text-2xl text-purple-700 rounded-2xl float-right bg-white w-28">ETH</button>
            </div>
            <div className='h-28 bg-purple-400 m-2 p-2 rounded-2xl'>
                <section className='text-gray-500'>You Recieve</section>
                <input className="text-4xl border-none outline-none placeholder-white w-20 bg-transparent" type="text" placeholder='0'/>
                <button className="text-2xl text-purple-700 rounded-2xl float-right bg-white w-28">ETH</button>
            </div>
            <button className=' bg-purple-400 rounded-2xl p-2 m-auto'>Connect</button>
        </div>
        </>
    )
}