import React, { useState } from 'react';
import CanvasAnimation from "../components/Animation_Pixel";
import { Header } from "../components/Header";
import "./Home.scss"
import { FollowersGame } from '../components/FollowersGame';
import PropTypes from 'prop-types';

const posts = [
    {
        id: 1,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 40
    },
    {
        id: 2,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 38
    },
    {
        id: 3,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 20
    },
    {
        id: 4,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 25
    },
    {
        id: 5,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 35
    },
    {
        id: 6,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 31
    },
    {
        id: 7,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 30
    },
    {
        id: 8,
        img: 'https://onedrive.live.com/embed?resid=32A795397841BA5D%21143&authkey=%21APPJfPktfvGD6l8&width=739&height=656',
        numberFollowers: 30
    }
]

posts.propTypes = {
    img: PropTypes.string.img,
    numberFollowers: PropTypes.number.numberFollowers,
};


export const Home = () =>{
    const [chooseNumber, setChooseNumber] = useState(4)


    return(
        <section>
            <Header />
            <main className="main">
                <div className="main_hat">
                    <div className="main_hat_title">
                        <p className="main_hat_title_Dev">3D game Dev</p>
                        <h1 className="main_hat_title_big">Thank you for playing <br /> with us</h1>
                        <p className="main_hat_title_text">Welcome to our gaming platform where your
                        gaming dreams <br /> become a reality. Join the largest community of gamers <br />and immerse 
                        yourself in the best games, the latest releases, and <br /> unforgettable adventures. Are 
                        you ready to embark on <br /> your gaming journey? Let{`'`}s make games great together!</p>
                        <button className="main_hat_title_button main_hat_title_btn">Get more details</button>
                    </div>
                    <CanvasAnimation />
                </div>
                <div className='main_TrendingGame'>
                    <div className='main_TrendingGame_ControlsBlock'>
                        <h2 className='main_TrendingGame_ControlsBlock_title'>Currently Trending Game</h2>
                        <button onClick={() => setChooseNumber(chooseNumber === 100 ? 4 : 100) } className='main_TrendingGame_ControlsBlock_button main_TrendingGame_ControlsBlock_btn'>SEE ALL</button>
                    </div>
                    <div className='main_TrendingGame_listGame'>
                        {posts.slice(0, chooseNumber).map(post => 
                            <section key={post.id}>
                                <FollowersGame image={post.img} numberFollowers={post.numberFollowers} />  
                            </section>
                        )}
                    </div>
                    
                </div>
                
            </main>
        </section>
    )
}