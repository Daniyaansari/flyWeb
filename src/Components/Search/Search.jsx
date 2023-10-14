import React, { useEffect } from "react";
import { HiLocationMarker } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';



//  Import AOS //
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Search() {

    // useeffect to set animation duration //

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    return (
        <>

            <div className="search Container section">
                <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">
                    <div className="btns flex">
                        <div className="singleBtn">
                            <span>Economy</span>
                        </div>

                        <div className="singleBtn">
                            <span>Bussiness Class</span>
                        </div>

                        <div className="singleBtn">
                            <span>First Class</span>
                        </div>

                    </div>

                    <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
                        {/* single input */}
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiLocationMarker className="icon" />
                            </div>

                            <div className="texts">
                                <h4>Location</h4>
                                <input type="text" placeholder="where do you want to go?" />

                            </div>
                        </div>



                        {/* single input */}
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RiAccountCircleLine className="icon" />
                            </div>

                            <div className="texts">
                                <h4>Travelers</h4>
                                <input type="text" placeholder="Add Guests" />

                            </div>
                        </div>


                        {/* single input */}
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className="icon" />
                            </div>

                            <div className="texts">
                                <h4>Check In</h4>
                                <input type="text" placeholder="Add Date" />

                            </div>
                        </div>


                        {/* single input */}
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className="icon" />
                            </div>

                            <div className="texts">
                                <h4>Check Out</h4>
                                <input type="text" placeholder="Add Date" />

                            </div>
                        </div>

                        <button className="btn btnBlock flex">Search Flight</button>
                    </div>

                </div>
            </div>


        </>
    )
}