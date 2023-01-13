import React from "react";
import milestones from "../../Assets/Milestones.svg";

export default function Milestones() {
    return (
        <>
            <div className="my-5">
            <img src={milestones} alt="" style={{ padding: "1.4rem" }} />
            {/* <h1 className="text-light">Rewards</h1> */}
            <ul className='text-light my-2 ps-5'>
                <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores assumenda minus excepturi quisquam neque quidem ipsam facere numquam quasi corrupti?</li>
                <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque accusamus dolorem corporis vel nisi non neque! Cumque facere assumenda minima voluptatem quod, error corporis quisquam qui porro. Quia, doloremque.</li>
                <li className='bullets-guideline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique sint facilis quo necessitatibus vel iure minima voluptates hic asperiores nemo.</li>
                <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, asperiores.</li>
                <li className='bullets-guideline'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, sint!</li>
                <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim.</li>
                <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perferendis.</li>
            </ul>
            </div>

        </>
    )
}