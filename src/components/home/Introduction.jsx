import React from 'react'
import intro_video from '/assets/videos/intro_vid.mp4';
import NavBar from './NavBar';
import Slidings from './Slidings';
import CallToActionButton from './CallToActionButton';
function Introduction() {
  return (
    <>
    <div>
      <div>
        
      </div>
      <div>
        <Slidings />
    <video src={intro_video} autoPlay muted loop className=' max-w-full max-h-full overflow-hidden'/>
    <CallToActionButton />
      </div>
    </div>
    </>
  )
}

export default Introduction