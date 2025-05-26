import React from 'react';
import PricingFeature from './PricingFeature';
import { Key } from 'lucide-react';

const PricingCard = ({pricing}) => {

     const { name, price, description, features } = pricing;
    return (
        <div className='flex flex-col border bg-blue-600 text-white rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-blue-500 shadow-2xl p-4 rounded-2xl mt-10 flex-1'>
                <p>{description}</p>
                
                {
                    features.map((feature, index) => <PricingFeature
                        key={index}
                        feature={feature}></PricingFeature>)
                }
                
           </div>
           <button className='btn w-full mt-4 hover:text-white hover:bg-red-600'>Subscribe</button>
        </div>
    );
};

export default PricingCard;