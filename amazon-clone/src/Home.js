import React from 'react'
import './Home.css'
import Product from './Product'
import bg from './image/bg.jpeg'
import dayz from './image/dayz.jpeg'
import drgballz from './image/dragonballz.jpeg'
import fifa from './image/fifa.jpeg'
import naruto from './image/naruto.jpeg'
import GreedFall from './image/GreedFall.jpeg'
import ELDENRING from './image/ELDENRING.jpeg'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={bg} alt="" />

                <div className="home__row" >
                    <Product
                        id="01"
                        title='Day Z'
                        price={26.99}
                        image={dayz} />

                    <Product
                        id="02"
                        title='DRAGON BALL FighterZ'
                        price={14.24}
                        image={drgballz} />

                </div>

                <div className="home__row" >
                    <Product
                        id="03"
                        title='NARUTO SHIPPUDEN: Ultimate Ninja STORM 4'
                        price={29.99}
                        image={naruto} />

                    <Product
                        id="04"
                        title='Fifa 22'
                        price={59.99}
                        image={fifa} />

                    <Product
                        id="05"
                        title='GreedFall'
                        price={13.99}
                        image={GreedFall} />
                </div>

                <div className="home__row" >
                    <Product
                        id="06"
                        title='ELDEN RING'
                        price={59.99}
                        image={ELDENRING} />
                </div>
            </div>
        </div>
    )
}

export default Home