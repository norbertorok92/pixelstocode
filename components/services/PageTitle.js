import React from 'react'

export default function PageTitle() {
    return (
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="section-title">
                        <h2>Proud Projects That Make Us Stand Out</h2>
                        <div className="bar"></div>
                        <h5>Some highlights of our favorite projects we've done for forward thinking clients.</h5>
                    </div>
                </div>
            </div>
            
            <div className="shape1"><img src={require("../../images/shape1.png")} alt="shape" /></div>
            <div className="shape2 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
            <div className="shape3"><img src={require("../../images/shape3.svg")} alt="shape" /></div>
            <div className="shape4"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
            <div className="shape5"><img src={require("../../images/shape5.png")} alt="shape" /></div>
            <div className="shape6 rotateme"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
            <div className="shape7"><img src={require("../../images/shape4.svg")} alt="shape" /></div>
            <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
        </div>
    )
}
