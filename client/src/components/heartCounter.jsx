import React from 'react';

const heartCounter = ({ heartCount }) => {
    return(
        <div className="container mt-5 js--section-heartCounter">
            <div className="jumbotron text-center">
                
                <h1 className="text-dark">Thankyou, for all the <i className="fas fa-heart icon-small text-danger"></i></h1>
                
                <p>Our customers love to dine at Pola's and they'd return us a <i className="fas fa-heart"></i>. So, we kept a count on 'em.</p>
                <hr />
                
                {heartCount === -1 ?
                    '':
                    <p>
                        <span className="counter mr-1"><b>{heartCount}</b></span> hearts and counting.
                    </p>
                }

                <a className="nb-btn nb-btn-full" href="#opinionForm" role="button">Give us a heart.</a>
            </div>
        </div>
    )

}

export default heartCounter;