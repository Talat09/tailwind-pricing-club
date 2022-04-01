import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0,
            benifits: ['Lifetime free', 'unlimited deals', 'fasntastic deals', 'localized deals', 'Crazy deals']
        },
        {
            id: 2, name: 'Regular', price: 9.99,
            benifits: ['Everything on free', 'unlimited deals', 'fasntastic deals', 'localized deals', 'Crazy deals']
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            benifits: ['Everything on Regular', 'unlimited deals', 'fasntastic deals', 'localized deals', 'Crazy deals']
        }
    ]
    return (
        <div className='bg-pink-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deal Of the Town</h1>
            <p className='text-white'>Whether you are paying interest or not, it always pays to scout out the best deal.
                Times, Sunday Times (2015)
                They can do all the donkey-work in finding the best deal for you - and there's a human on the spot for advice.
                The Sun (2007)
            </p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >

                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;