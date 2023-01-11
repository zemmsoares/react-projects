import React from 'react'

function Movie({ name, pt_name, cover, yt_link, imdb_classification, description, year, tags}) {
    return (
        <div className='flex justify-center items-center bg-slate-900 h-screen'>
            <div className='w-10/12'>
                <div className='flex flex-row justify-between'>
                    <div className=''>
                        <p className='pl-2 text-4xl font-bold text-white'>{name}</p>
                        <p className='pl-2 text-white'>{pt_name}, {year}</p>
                    </div>
                    <div className='flex justify-center items-center flex-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <p className='pl-2 text-4xl font-bold text-white'>{imdb_classification}/10</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center sm:flex-row sm:h-96 '>
                    <div className='w-96 h-96 pr-2'>
                        <img className='w-full h-full object-contain' src={cover} alt="cover" />
                    </div>
                    <div className='w-full h-80 sm:h-full pt-2 sm:pt-0'>
                        <iframe className='w-full h-full' src={yt_link}></iframe>
                    </div>
                </div>
                <div className='flex flex-row p-2 my-1'>
                    {tags.map((tag)=> {
                        return <div className="w-fit px-3 mr-2 rounded-full border text-white">{tag}</div>
                    })}
                </div>
                   <div className="flex flex-col sm:flex-row items-center">
                    <div className='w-full sm:w-2/3 px-2 text-white'>{description}</div>
                    <div className='w-full sm:w-1/3 px-2 justify-center py-2 sm:py-0'>
                        <button className='bg-gray-200 p-2 w-full rounded-lg'
        onClick={()=> window.location.reload(false)}>Suggest a movie</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Movie 
