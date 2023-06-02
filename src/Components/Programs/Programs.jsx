import React from 'react'
import "./Programs.css"
import { programsData } from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
import { Link } from 'react-scroll'
export const Programs = (props) => {
    return (
        <div className='Programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="programs-categories">
                {programsData.map((program , i) => (
                    <div className="category" key={i}>
                          {program.image}
                          <span>{program.heading}</span>
                          <span>{program.details}</span>
                          <div className="join-now">
                            <Link
                              to='join-us'
                              span={true}
                              smooth={true}
                            >
                            <span>Join Now</span> 
                            </Link>
                            <img src={RightArrow} alt="" />
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
