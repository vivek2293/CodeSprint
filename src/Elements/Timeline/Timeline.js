import React from "react";
import Timelinelogo from "../../Assets/timeline.svg"
function Timeline() {
    return (
        <>
            <img src={Timelinelogo} alt="" />
            
            <section
                // style={{ height: "200vh" }}
                className="row justify-content-around align-items-center"
                id="timelinediv"

            >
                <div className="card  col-8 col-md-2 my-2 shadow-lg p-4" style={{ height: "18rem" }} id = "card1" >
                    <h3 className="text-center textdarkt fw-bold my-2">Web Dev</h3>
                    <div className="row justify-content-center align-items-center">
                        <h6 className="text-center text-dark m-2">16th January</h6>
                    </div>
                    <p className="text-center text-light text-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aliquid!
                    </p>
                </div>
                <div className="card  col-8 col-md-2 my-2 shadow-lg p-4" style={{ height: "18rem" }} id = "card2">
                    <h3 className="text-center text-dark fw-bold my-2">Let's React</h3>
                    <div className="row justify-content-center">
                        <h6 className="text-center text-dark m-2">23rd January</h6>
                    </div>
                    <p className="text-center text-light text-light">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                    </p>
                </div>
                <div className="card col-8 col-md-2 my-2 shadow-lg p-4" style={{ height: "18rem" }} id="card3">
                    <h3 className="text-center text-dark fw-bold my-2">Code Node</h3>
                    <div className="row justify-content-center">
                        <h6 className="text-center text-dark m-2">30th January</h6>
                    </div>
                    <p className="text-center text-light text-light">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                    </p>
                </div>
                <div className="card  col-8 col-md-2 my-2 shadow-lg p-4" style={{ height: "18rem" }} id = "card4">
                    <h3 className="text-center text-dark fw-bold my-2">API Sprint</h3>
                    <div className="row justify-content-center">
                        <h6 className="text-center text-dark m-2">6th February</h6>
                    </div>
                    <p className="text-center text-light text-light">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                    </p>
                </div>
                <div className="card  col-8 col-md-2 my-2 shadow-lg p-4" style={{ height: "18rem" }} id="card5">
                    <h3 className="text-center textdark fw-bold my-2">Flutter Fest</h3>
                    <div className="row justify-content-center">
                        <h6 className="text-center text-dark m-2">13th February</h6>
                    </div>
                    <p className="text-center text-light text-light">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                    </p>
                </div>
            </section>
        </>
    );
}

export default Timeline;