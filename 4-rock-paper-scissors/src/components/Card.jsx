import React from 'react'
import ScissorsImage from './images/scissors.png'
import RockImage from './images/rock.png'
import PaperImage from './images/paper.png'

function Card({ letter }) {
    return (

        <div>
            {letter == '' ? <div>
                <div className='h-80 w-48 bg-white border border-black rounded-xl mb-2 flex flex-col p-1.5'>
                    <div className='h-full justify-start items-end flex bg-purple-500 text-6xl rounded-lg'>
                        <div className='items-end pr-16 flex flex-col'>
                            <div className='pl-6 pb-3'>
                                <p className='uppercase text-sm text-white font-bold -mb-2'>rock</p>
                                <p className='uppercase text-sm text-white font-bold -mb-2'>Paper</p>
                                <p className='uppercase text-sm text-white font-bold'>Scissors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
                <div>
                    <div className='h-80 w-48 bg-white border border-black rounded-xl mb-2 flex flex-col p-1.5'>
                        <div className='h-1/10 text-sm pl-0.5'>
                            {letter}
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className='h-full justify-center items-center flex bg-purple-100 text-6xl'>
                            {letter == "R" ? <img src={RockImage} className="absolute h-48" /> : ''}
                            {letter == "P" ? <img src={PaperImage} className="absolute h-48" /> : ''}
                            {letter == "S" ? <img src={ScissorsImage} className="absolute h-48" /> : ''}
                        </div>

                        <div className='h-1/10 mt-auto justify-end flex text-sm pr-0.5'>
                            {letter}
                        </div>
                        <div className='h-1/10 justify-end flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </div>
                </div>}

        </div>

    )
}

export default Card
