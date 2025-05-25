import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

     const pricingData = use(pricingPromise)
    return (
        <div>
             <h1 className='text-3xl font-bold'>Get Our Menbership Now</h1>

             <div className='grid grid-cols-3 gap-6'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
             </div>
        </div>
    );
};

export default PricingOptions;