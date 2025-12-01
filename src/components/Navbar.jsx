import React from 'react'
import { navIcons, navLinks } from '#constants'
import Clock from './Clock'
import useWindowStore from '#store/window'

function Navbar() {
    const {openWindow} = useWindowStore();
    return (
        <nav>
            <div className='flex  justify-between'>
                <img className="logo" src="icons/arch-light.svg" alt="logo" style ={{height:"24px"}} />
                <ul>
                    {navLinks.map(({id,name,type}) => (
                            <li key={id}
                             onClick={() => openWindow(type)}>
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
                <p>Nitish's porject</p>
                
            </div>
            <time className='!pr-[13%]'>
                <Clock/>
            </time>
            <div>
                <ul>{navIcons.map(({id,img}) => (
                    <li key={id}><img src={img} className='icon-hover text-[20]' style={{ height: '15px' }}alt={`icon-${id}`}/></li>
                ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar