import React, { useState } from 'react';
import { Rate } from 'antd';
import './reviews.css'
import { useNavigate, useLocation } from 'react-router-dom';

export const Reviews = () => {

    const location = useLocation();
    const navigate = useNavigate(); 

    /* DUMMY DATA */

    const john1 = { 
        overall: 3, 
        friendliness: 0, 
        maintenance: 3,
        location: 'Troy, NY',
        date: 'April 16, 2018', 
        again: 'No', 
        student: 'Yes',
        price: "Relatively High",
        responds: 'Within 1-3 days',
        upvote: 2, 
        downvote: 0, 
        review: "Lorem ipsum dolor sit amet, et summo apeirian vel, velit doming et duo. Et sea falli platonem delicata, in nam qualisque expetendis, id debet menandri eam. Mei ne sale legendos consectetuer, tempor aeterno salutatus vim ei. At sea dico minimum, quo novum soleat volutpat et, dicant deseruisse at pri. Mediocrem honestatis mei cu. Vel putent vulputate forensibus ex, id hinc facer qualisque mea."
    }

    const john2 = { 
        overall: 4, 
        friendliness: 5, 
        maintenance: 2,
        location: 'Albany, NY',
        date: 'May 4, 2017', 
        again: 'Yes', 
        student: 'Yes',
        price: "Relatively Low",
        responds: 'Within 5-7 days',
        upvote: 1, 
        downvote: 1, 
        review: "Lorem ipsum dolor sit amet, et summo apeirian vel, velit doming et duo. Et sea falli platonem delicata, in nam qualisque expetendis, id debet menandri eam. Mei ne sale legendos consectetuer, tempor aeterno salutatus vim ei. At sea dico minimum, quo novum soleat volutpat et, dicant deseruisse at pri. Mediocrem honestatis mei cu. Vel putent vulputate forensibus ex, id hinc facer qualisque mea."
    }

    const john3 = { 
        overall: 5, 
        friendliness: 5, 
        maintenance: 5,
        location: 'Schenectady, NY',
        date: 'July 10, 2016', 
        again: 'Yes', 
        student: 'Yes',
        price: "Relatively Low",
        responds: 'Within 1-2 days',
        upvote: 1, 
        downvote: 1, 
        review: "Lorem ipsum dolor sit amet, et summo apeirian vel, velit doming et duo. Et sea falli platonem delicata, in nam qualisque expetendis, id debet menandri eam. Mei ne sale legendos consectetuer, tempor aeterno salutatus vim ei. At sea dico minimum, quo novum soleat volutpat et, dicant deseruisse at pri. Mediocrem honestatis mei cu. Vel putent vulputate forensibus ex, id hinc facer qualisque mea."
    }

    // DEMO
    const johnList = [john1, john2]; 
    // const johnList = [john1, john2, john3]; 

    /* CALCULATIONS */ 

    const calcMaint = () => {
        let mainTotal = 0;  
        for (let i = 0; i < johnList.length; i++){
            mainTotal += johnList[i].maintenance; 
        }
        mainTotal = mainTotal / 5; 
        return mainTotal; 
    }

    const calcFriendly = () => {
        let friendlyTotal = 0;  
        for (let i = 0; i < johnList.length; i++){
            friendlyTotal += johnList[i].friendliness; 
        }
        friendlyTotal = friendlyTotal / 5; 
        return friendlyTotal; 
    }

    const calcAgain = () => {
        let againTotal = 0; 
        for (let i = 0; i < johnList.length; i++){
            if (johnList[i].again === 'Yes'){
                againTotal += 1; 
            }
        }
        againTotal = Math.round((againTotal / johnList.length) * 100); 
        return againTotal; 
    }

    /* Calculate functions */ 
    const colors = (rating) => {
        if (rating === 0){
            return 'box0'
        }
        else if (rating === 1){
            return 'box1'
        }
        else if (rating === 2){
            return 'box2'
        }
        else if (rating === 3){
            return 'box3'
        }
        else if (rating === 4){
            return 'box4'
        }
        else{
            return 'box5'
        }
    }

    const colorsSmall = (rating) => {
        if (rating === 0){
            return 'box-two0'
        }
        else if (rating === 1){
            return 'box-two1'
        }
        else if (rating === 2){
            return 'box-two2'
        }
        else if (rating === 3){
            return 'box-two3'
        }
        else if (rating === 4){
            return 'box-two4'
        }
        else{
            return 'box-two5'
        }
    }


    return(
        <div className='review-container'>
            <div className='landlord-card'>
                <div className='landlord-card-items'>
                    <div className='upper-row'>
                        <div className='top-left'>
                            <div className='landlord-name'>{location.state.name}</div>
                            <div>
                                <Rate disabled defaultValue={location.state.rating} />
                                <p className='review-num'>10 Reviews</p>
                            </div>
                        </div>
                        <div className='top-right'>
                            <div className='top-right-row'>
                                <div className='category'>
                                    <div className='category-text'>
                                        <p>Maintenance</p>
                                        <img src={require("../../assets/image/tools.png")} className='category-icon'></img>
                                    </div>
                                    <div className='category-rating'>
                                        <div className={colors(calcMaint())}>
                                            <p className='first-number'>{calcMaint()}</p>
                                            <p className='box-text'>/5</p>
                                        </div>
                                    </div>  
                                </div> 
                                <div className='category'>
                                    <div className='category-text'>
                                        <p>Friendliness</p>
                                        <img src={require("../../assets/image/shake.png")} className='category-icon'></img>
                                    </div>
                                    <div className='category-rating'>
                                        <div className={colors(calcFriendly())}>
                                            <p className='first-number'>{calcFriendly()}</p>
                                            <p className='box-text'>/5</p>
                                        </div>
                                    </div>  
                                </div> 
                                <div className='category'>
                                    <div className='category-text'>
                                        <p>Would Lease Again</p>
                                    </div>
                                    <div className='category-rating'>
                                        <div className='box5'>
                                            <p className='category-percent'> {calcAgain()}% </p>
                                        </div>
                                    </div>  
                                </div> 
                            </div>   
                        </div>
                    </div>
                    <div className='bottom-row'>
                        <div className='bottom-row-left'>
                            <div className='question-line'>
                                <img src={require("../../assets/image/time.png")} className='icon'></img>
                                <p className='icon-text'> <b>Responds:</b> Within 1-3 days </p>
                            </div>
                            <div className='question-line'>
                                <img src={require("../../assets/image/rent.png")} className='icon'></img>
                                <p className='icon-text'> <b>Rent:</b> $$$ </p>
                            </div>
                            <div className='question-line'>
                                <img src={require("../../assets/image/hat.png")} className='icon'></img>
                                <p className='icon-text'> <b>Student Friendly:</b> Yes </p>
                            </div>
                        </div>
                        <div className='bottom-row-right'>
                            <div className='button' onClick={() => navigate("/form")}>
                                <p className='review-text'>Leave a Review</p>
                                <img src={require("../../assets/image/pen.png")} className='review-icon'></img>
                            </div>
                        </div>
                    </div>   
                </div>
            </div> 
            <div className='review-section'>
                <div className='review-list'>
                {
                    johnList.map((item,i) => {
                    return <div className='review-card' key={i}>
                        <div className='card-left'>
                            <div className='card-top-left'>
                                <div className='category-rating'>
                                    <div>
                                        <div className={colors(item.overall)}>
                                            <p className='first-number'>{item.overall}</p>
                                            <p className='box-text'>/5</p>
                                        </div>
                                        <div className='box-main-category-text'> Overall Rating </div>
                                    </div>
                                    <div>
                                        <div className={colorsSmall(item.friendliness)}>
                                            <p className='second-number'>{item.friendliness}</p>
                                            <p className='box-text-two'>/5</p>
                                        </div>
                                        <div className='box-category-text'> Friendliness</div>
                                    </div>
                                    <div>
                                        <div className={colorsSmall(item.maintenance)}>
                                            <p className='second-number'>{item.maintenance}</p>
                                            <p className='box-text-two'>/5</p>
                                        </div>
                                        <div className='box-category-text'> Maintenance </div>
                                    </div>
                                </div>  
                            </div>
                            <div className='card-left-bottom'> 
                                <div className='card-location'>
                                    <p className='location-text'> {item.location}</p>
                                </div>
                                <p className='review-paragraph-text'> {item.review} </p>
                            </div>
                        </div>
                        <div className='card-right'>
                            <div className='card-date'>
                                <p> {item.date} </p>
                            </div>
                            <div className='card-questions'>
                                <div className='card-qa'>
                                    <p className='question-text'> Would lease again: </p>
                                    <p className='answer-text'> {item.again} </p>
                                </div>
                                <div className='card-qa'>
                                    <p className='question-text'> Student Friendly: </p>
                                    <p className='answer-text'> {item.student} </p>
                                </div>
                                <div className='card-qa'>
                                    <p className='question-text'> Price: </p>
                                    <p className='answer-text'> {item.price} </p>
                                </div>
                                <div className='card-qa'>
                                    <p className='question-text'> Responds: </p>
                                    <p className='answer-text'> {item.responds} </p>
                                </div>
                            </div>
                            <div className='card-bottom-right'>
                                <div className='vote'>
                                    <img src={require("../../assets/image/up.png")} className='vote-icon'></img>
                                    <p className='score-review'> {item.upvote} </p>
                                </div>
                                <div className='vote'>
                                    <img src={require("../../assets/image/down.png")} className='vote-icon'></img>
                                    <p className='score-review'> {item.downvote} </p>
                                </div>
                                <div className='vote'>
                                    <img src={require("../../assets/image/flag.png")} className='vote-icon'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    })
                }
                </div>      
                <div className='review-locations'>
                    <div className='locations'>
                        <div className='location-content'>
                            <div className='location-title'>Locations</div>
                            <div className='border-location'></div>
                            <div className='location-list'>
                                <div className='location-item'>
                                    <p> Troy, NY </p>
                                    <img src={require("../../assets/image/pin.png")} className='location-pic'></img>
                                </div>
                                <div className='location-item'>
                                    <p> Albany, NY </p>
                                    <img src={require("../../assets/image/pin.png")} className='location-pic'></img>
                                </div>
                                <div className='location-item'>
                                    <p> Schenectady, NY </p>
                                    <img src={require("../../assets/image/pin.png")} className='location-pic'></img>
                                </div>
                                <div className='location-item'>
                                    <p> New York, NY </p>
                                    <img src={require("../../assets/image/pin.png")} className='location-pic'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}