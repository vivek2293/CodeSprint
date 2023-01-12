import React, { Component } from 'react'
import Guidlinelogo from "../../Assets/Guidelines.svg"
export class Guidline extends Component {
  render() {
    return (
        <>
        <section id='guidelines'>
        <div className='my-5'>

<img src={Guidlinelogo} alt="" style={{padding:"1.4rem"}}/>

<ul className='text-light'>
   <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores assumenda minus excepturi quisquam neque quidem ipsam facere numquam quasi corrupti?</li>
   <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque accusamus dolorem corporis vel nisi non neque! Cumque facere assumenda minima voluptatem quod, error corporis quisquam qui porro. Quia, doloremque.</li>
   <li className='bullets-guideline'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique sint facilis quo necessitatibus vel iure minima voluptates hic asperiores nemo.</li>
   <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, asperiores.</li>
   <li className='bullets-guideline'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, sint!</li>
   <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim.</li>
   <li className='bullets-guideline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perferendis.</li>
</ul>
</div>
{/* <hr style={{color:"#FBBC04"}}/> */}
        </section>
       
        </>
    )
  }
}

export default Guidline