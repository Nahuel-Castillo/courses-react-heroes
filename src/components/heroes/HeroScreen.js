import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors';
import './HeroCard.css';

export const HeroScreen = ( { history } ) => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);

    if ( !hero ) {
        return <Redirect to="/" />
    }

    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        history.goBack();
    };


    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__slideInLeft animate__faster">
                <img src={`../assets/heroes/${id}.jpg`} className="img-thumbnail" alt={superhero} />
            </div>

            <div className="col-8 animate__animated animate__fadeIn animate__fast">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>
                <hr/>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button className="btn btn-outline-primary"
                 onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
}
