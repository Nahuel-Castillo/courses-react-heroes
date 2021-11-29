import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors';
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo(() => getHeroByPublisher( publisher ), [ publisher ]);
    // const heroes = getHeroByPublisher( publisher );

    return (
        <div className='card-group animate__animated animate__fadeIn animate__fast'>
            
            {
                heroes.map( hero => (
                    <HeroCard  key={ hero.id } hero={ hero } />
                ))
            }

        </div >
    )
}
