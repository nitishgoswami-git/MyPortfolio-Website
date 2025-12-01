import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

function Contact() {
  return (
    <>
    <div id="window-header">
        <h2>Contact Me</h2>
        <WindowControls target='contact'/>
    </div>
    <div className="p-5 space-y-5">
        <img src="images/nitish.jpg" alt=""  className='w-20 rounded-full'/>
        <h3>
            Let's Connect
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, non?</p>
        <ul>
            {socials.map(({id,bg,link ,icon,text}) => (
                <li key={id} style={{backgroundColor: bg}}>
                    <a href={link} target='_blank' rel="noopener noreferrer">
                        <img src={icon} alt={text}
                        className='size-5' />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}
const ContactWrapper = WindowWrapper(Contact,'contact')
export default ContactWrapper