import React, { useEffect } from "react";

//  import Destination images //
import paris from "../../assets/paris.jpg";
import london from "../../assets/london.jpg";
import newyork from "../../assets/newyork.jpg";
import dubai from "../../assets/dubai.jpg";



// import traveler Images //

import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';


//  Import AOS //
import Aos from 'aos';
import 'aos/dist/aos.css';


// we are use high order array method called map to display all the data //

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: user1,
        travelerName: 'IsraTech',
        socialLink: '@isratech8',


    },
    {
        id: 2,
        destinationImage: london,
        travelerImage: user2,
        travelerName: 'wilson Lindesy',
        socialLink: '@wilsonlindesy',


    },
    {
        id: 3,
        destinationImage: newyork,
        travelerImage: user3,
        travelerName: 'Nicole Web',
        socialLink: '@nicoleweb',


    },
    {
        id: 4,
        destinationImage: dubai,
        travelerImage: user4,
        travelerName: 'Naresh Lamer',
        socialLink: '@nareshlamer',


    }
]

export default function Travelers() {
     // useeffect to set animation duration //

     useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <>
            <div className="travelers container section">
                <div className="sectionContainer">
                    <h2 data-aos='fade-down' data-aos-duration='2500'>Top Travelers of this month!</h2>

                    <div className="travelersContainer grid">

                        {
                            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink }) => {

                                return (
                                    // {/* single passenger Card */} //

                                    <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                        <img src={destinationImage} alt="peris" className="destinationImage" />
                                        <div className="travelerDetails">
                                            <div className="travelerPicture">
                                                <img src={travelerImage} alt="user1" className="travelerImage" />

                                            </div>

                                            <div className="travelerName">
                                                <span>{travelerName}</span>
                                               {socialLink}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

    



                    </div>
                </div>
            </div>
        </>
    )
}   