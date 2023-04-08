import React from 'react';
import Image from 'next/image';
import house from '../../../public/house.svg';

const Empty = ({ empty }) => {
    return (
        <div className="flex flex-col justify-center items-center h-96">
            <Image src={house} width={300} height={300} alt="" />
            <strong>{empty}</strong>
        </div>
    );
};

export default Empty;
