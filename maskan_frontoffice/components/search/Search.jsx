import { PropertyContext } from '@/context/property';
import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { cities } from '@/data/cities';

const Search = () => {
    const { searchProperties } = useContext(PropertyContext)
    const [formData, setFormData] = useState({
        city: "",
        price: "",
        stage: "",
    });
    const { city, price, stage } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!city && !price && !stage) {
            alert('Please add fields')
        } else {
            searchProperties(city, price, stage)
        }
    };
    return (
        <form onSubmit={onSubmit} className='px-[30px] py-2 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 lg:shadow-violet-400 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <select
                name="city"
                id="city"
                value={city}
                onChange={onChange}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 block w-full p-2"
            >
                <option selected disabled>
                    Choose a city
                </option>
                {cities.map((city) => (
                    <option>
                        {city.ville}
                    </option>
                ))}
            </select>
            <input
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 block w-full p-2"
                name="price"
                id="price"
                value={price}
                onChange={onChange}
                type="number"
                placeholder="Price"
            />
            <input
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 block w-full p-2"
                name="stage"
                id="stage"
                value={stage}
                onChange={onChange}
                type="number"
                placeholder="Stage"
            />
            <button type='submit' className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-lg'>
                <AiOutlineSearch />
            </button>
        </form>
    )
}

export default Search