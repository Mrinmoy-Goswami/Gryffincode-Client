import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='w-full flex-col flex items-center mt-5 mb-0 '>
        <h1 className='slide-in-elliptic-top-fwd delay-500 font-hero font-bold text-[#c39a1c] text-[80px] w-1/2 text-center mt-5 mb-5'>Welcome</h1>
      <h1 className='puff-in-center font-hero font-bold text-[#c39a1c] text-[60px] w-2/3 text-center'>to the magical world of wizardry  !</h1>
      <div className='w-full text-center mt-10 font-quote mb-5'>

      <TypeAnimation
      
      sequence={[
          // Same substring at the start will only be typed out once, initially
          '"It matters not what someone is born, but what they grow to be." - Albus Dumbledore',
          3000, 
          '"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light." - Albus Dumbledore"',
          3000,
          '"Books! And cleverness! There are more important things—friendship and bravery." - Hermione Granger"',
          3000, 
          '"Do not let the Muggles get you down!" - Ron Weasley"',
          3000,
          '"Always." - Severus Snape"',
          3000, '"We have all got both light and dark inside us. What matters is the part we choose to act on. That is who we really are." - Sirius Black"',
          3000,
        ]}
        wrapper="span"
        speed={80}
        style={{ fontSize: '2.5rem' , color:"#c39a1c",marginBottom:"0px" }}
        repeat={Infinity}
        />
        </div>
    </div>
  )
}

export default Hero
