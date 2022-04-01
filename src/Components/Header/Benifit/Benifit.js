import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'
const Benifit = (props) => {
    return (
        <p className='flex items-center'><CheckCircleIcon className='w-4 h-4 text-green-500'></CheckCircleIcon>
            {props.benifit}
        </p>
    );
};

export default Benifit;