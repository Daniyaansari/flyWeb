import React, { useEffect } from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck} from "react-icons/bs";
import { BsBookmarkCheck} from "react-icons/bs";


//  Import AOS //
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Info(){

      // useeffect to set animation duration //

      useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return(
        <>
        <div className="info Section">
            <div className="infoContainer container">
                <div className="titleDiv flex">
                    <h2 data-aos='fade-right' data-aos-duration='2400'>Travel to make memories all around the world </h2>
                    <button data-aos='fade-left' data-aos-duration='2400' className="btn">View All</button>
                </div>
                <div data-aos='fade-up' data-aos-duration='2300' className="cardsDiv grid">
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <RxCalendar className="icon"/>                
                    </div>

                    <span className="cardTitle">Book & Relax</span>
                    <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div>

                <div data-aos='fade-up' data-aos-duration='2400' className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <BsShieldCheck className="icon"/>                
                    </div>

                    <span className="cardTitle">Smart Checklist</span>
                    <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className="icon"/>                
                    </div>

                    <span className="cardTitle">Save More</span>
                    <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div> 
            </div>      
        </div>
        </div>
        
        
        </>
    )
}