import React from 'react'
import Main from '../Elements/Main/Main.jsx'
import Navbar from '../Elements/Navbar/Navbar.jsx'
import Timeline from '../Elements/Timeline/Timeline.js'
import Ques from '../Elements/FAQ/Faq.jsx'
import Guidline from '../Elements/Guidlines/Guidlines.jsx'
function Homepage() {
  return (
    <>
    <Navbar />
    <Main />
    <Timeline />
    <Ques />
    <Guidline />
    </>

  )
}

export default Homepage