import React from 'react'

const Search = () => {
    return (
        <div className='px-[30px] py-2 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <select
                name="company"
                id="companies"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 block w-full p-2"
            >
                <option selected disabled>
                    Choose a city
                </option>
                <option>
                    casa
                </option>
                <option>
                    Rabat
                </option>
            </select>
            <input
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 block w-full p-2"
                name="price"
                type="number"
                placeholder="Price"
            />
            <input
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 block w-full p-2"
                name="stages"
                type="number"
                placeholder="Stages"
            />
            <button className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-14 rounded-lg flex justify-center items-center text-white text-lg'>
                search
            </button>
        </div>
    )
}

export default Search