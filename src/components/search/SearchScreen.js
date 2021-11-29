import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors';


export const SearchScreen = ( { history } ) => {

    const location = useLocation();
    const { q:queryValue = '' } = queryString.parse( location.search );

    const [ { hero:inputHeroName }, handleInputChange ] = useForm( { hero: queryValue } );

    const heroesFiltered = useMemo( () => getHeroesByName( queryValue ), [ queryValue ]);
        
    const handleSearch = ( e ) => {
        e.preventDefault();
        history.replace(`?q=${ inputHeroName || '' }`);
    };

    return (
        <div className="animate__animated animate__animated animate__fadeIn animate__fast">
            {/* <h2> SearchScreen </h2>
            <hr/> */}

            <div className="row">
                <div className="col-2">

                    <h4> Search </h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input 
                            name="hero"
                            type="text" 
                            placeholder="Find hero" 
                            className="form-control"
                            onChange={ handleInputChange }
                            value={ inputHeroName }
                        />

                        <button 
                            className="btn btn-outline-primary btn-block mt-2" 
                            type="submit"
                        >
                            Search
                        </button>
                    </form>

                </div>

                <div className="col-10">

                    <h4> Results </h4>
                    <hr/>

                    {

                        ( inputHeroName !== '' && heroesFiltered.length === 0 )
                        && 
                        <div className="alert alert-danger">
                            There is no a hero with "{ inputHeroName }"
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                hero={ hero }
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
