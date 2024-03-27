import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import Education from '../Education'
import WorkExperience from '../WorkExperience'
import Projects from '../Projects'
import ContactMe from '../ContactMe'
import TeachingExperience from '../TeachingExperience'
import Languages from '../Languages'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
        <Education />
        <WorkExperience />
        <TeachingExperience/>
        <Projects/>
        <Languages/>
        {/* <ContactMe /> */}
        {/* <Comments/> */}
    </div>
  )
}

export default HomeScreen