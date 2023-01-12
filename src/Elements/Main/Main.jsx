import React from "react";
import Logo from "../../Assets/Logo.svg"
import Particle from "../../components/Particle";

export default function Main() {
    return (
        <>
            <div>
            <section id="mainsection" className="d-flex justify-content-center align-items-center" >
                <div className="d-flex flex-column align-items-center" id="maindiv">
                        <Particle />
                        <h3 className="text-center"><img src={Logo} alt="" id="logo" /></h3>
                        <button type="button" className="btn btn-custom button1 fw-bold" id="registerbtn">Register</button>
                </div>
            </section>
            </div>
          
        </>
    )
}