function Timeline() {
    return (
        <>
            <section
                className="row justify-content-center"
                id="timelinediv"
            >
                <div className="row justify-content-lg-start justify-content-center pe-lg-4">
                    <div className="col-md-11 row align-items-center justify-content-around">
                        <div className="card col-8 col-md-3 my-2 shadow-lg p-4" style={{ height: "18rem"} } id="card1" >
                            <h3 className="text-center textdarkt fw-bold my-2">Web Dev</h3>
                            <div className="row justify-content-center align-items-center">
                                <h6 className="text-center text-dark m-2">16th January</h6>
                            </div>
                            <p className="text-center text-light text-light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aliquid!
                            </p>
                        </div>
                        <div className="card  col-8 col-md-3 my-2 shadow-lg p-4" style={{ height: "18rem" }} id="card2">
                            <h3 className="text-center text-dark fw-bold my-2">Let's React</h3>
                            <div className="row justify-content-center">
                                <h6 className="text-center text-dark m-2">23rd January</h6>
                            </div>
                            <p className="text-center text-light text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                            </p>
                        </div>
                        <div className="card col-8 col-md-3 my-2 shadow-lg p-4" style={{ height: "18rem" }} id="card3">
                            <h3 className="text-center text-dark fw-bold my-2">Code Node</h3>
                            <div className="row justify-content-center">
                                <h6 className="text-center text-dark m-2">30th January</h6>
                            </div>
                            <p className="text-center text-light text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-lg-end justify-content-center ps-lg-5">
                    <div className="col-md-11 row align-items-center justify-content-around">
                        <div className="card col-8 col-md-3 my-2 shadow-lg p-4" style={{ height: "18rem" }} id="card4">
                            <h3 className="text-center text-dark fw-bold my-2">API Sprint</h3>
                            <div className="row justify-content-center">
                                <h6 className="text-center text-dark m-2">6th February</h6>
                            </div>
                            <p className="text-center text-light text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                            </p>
                        </div>
                        <div className="card col-8 col-md-3 my-2 shadow-lg p-4" style={{ height: "18rem" }} id="card5">
                            <h3 className="text-center textdark fw-bold my-2">Flutter Fest</h3>
                            <div className="row justify-content-center">
                                <h6 className="text-center text-dark m-2">13th February</h6>
                            </div>
                            <p className="text-center text-light text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                            </p>
                        </div>
                        <div className="card col-8 col-md-3 my-2 shadow-lg p-2" style={{ height: "18rem" }} id="card2">
                            <h3 className="text-center textdark fw-bold my-2">DevHeat Beta</h3>
                            <div className="row justify-content-center">
                                <h6 className="text-center text-dark m-2">13th February</h6>
                            </div>
                            <p className="text-center text-light text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.dignissimos
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Timeline;