import React from "react";
import dataReviews from "../dataReviews";

export default function Reviews() {
    const [index, setIndex] = React.useState(0);
    const {name, job, img, desc} = dataReviews[index];

    const checkNumber = (number) => {
        if(number > dataReviews.length - 1) {
            return 0;
        }
        if(number < 0) {
            return dataReviews.length - 1;
        }

        return number;
    };

    const prev = () => {
        setIndex(prev => {
            return checkNumber(prev - 1);
        })
    };

    const next = () => {
        setIndex(prev => {
            return checkNumber(prev + 1);
        })
    };

    const random = () => {
        let randomNumber = Math.floor(Math.random() * dataReviews.length);
        if(randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <div className="reviews">
            <div className="thumb">
                <img src={img} alt="profile-picture" height={230} width={230}/>
            </div>

            <div className="title">
                <h4 className="author">{name}</h4>
                <h5 className="job">{job}</h5>
            </div>

            <div className="desc">
                <p><i class="bi bi-quote"></i>{desc}<i class="bi bi-quote rotate"></i></p>
            </div>

            <div className="button">
                <i class="bi bi-chevron-left previous" onClick={prev}></i>
                <i class="bi bi-chevron-right next" onClick={next}></i>
                <button onClick={random} className="random-button">Random</button>
            </div>
        </div>
    )
}