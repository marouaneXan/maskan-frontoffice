import React from 'react'

const Search = () => {
    return (
        <div className='px-[30px] py-2 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <p>country</p>
            <p>stage</p>
            <p>price</p>
            <button className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-14 rounded-lg flex justify-center items-center text-white text-lg'>
                search
            </button>
        </div>
    )
}

export default Search