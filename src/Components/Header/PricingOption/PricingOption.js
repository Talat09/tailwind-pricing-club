import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';

const PricingOption = (props) => {
    const { name, price, benifits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-pink-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mon</span>
            </p>
            <div>
                <h3 className='text-xl text-left mr-2'>Benifits:</h3>
                {
                    benifits.map(benifit => <Benifit
                        key={benifit.id}
                        benifit={benifit}
                    ></Benifit>)
                }

            </div>
            <button className='bg-black flex text-white justify-center w-full py-2 mt-4 rounded hover:bg-pink-300 text-white font-semibold'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;