import React from 'react'
import { Link } from 'react-router-dom';

import './HeroCard.css';

export const HeroCard = ( { hero } ) => {

    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <Link to={`./hero/${id}`} className="my-card m-1 animate__animated animate__fadeIn animate__faster">
            <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero} />
            <div className="animate__animated animate__fadeIn animate__faster animate__delay-1s">

                <div className="profile-name">{superhero}</div>
                <div className="profile-position">{alter_ego}</div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4">
                                <h3>{publisher}</h3>
                                <p>First Appearance: <br />{first_appearance}</p>
                                {
                                    (alter_ego !== characters)
                                    && <p>{characters}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
