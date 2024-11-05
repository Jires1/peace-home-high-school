import { NavLink } from 'react-router-dom'
import './NavLinks.css'
export default function NavLinks () {

    const links = [
        {'name' : 'Home'},
        {'name' : 'Discover', submenu:true, sublinks:[
            {
                head:"Our History",
            },{
                head:"Gallery",
            }]},
        {'name' : 'Study at P.H.C.H.S', submenu:true, sublinks:[
            {
                head:'Ordinary Secondary Cycle',
                sublink:[
                    {name:'Arts'},
                    {name:'Science'},
                ]
            },
            {
                head:'Advance Secondary Cycle',
                sublink:[
                    {name:'Arts'},
                    {name:'Science'},
                ]
            },
            {
                head:'Technical Section',
                sublink:[
                    {name:'Electrical Power System'},
                    {name:'Automobile Repair Mechanics'},
                    {name:'Building Construction'},
                    {name:'Home Economics'},
                    {name:'Modern Computer Laboratry'},
                    {name:'Bestpoke Tailoring'},
                ]
            },
        
        ]
        },
        {'name' : 'Contact'},
    ]

    return (
        <>
            {
                links.map((link, index) => (
                    <div key={index}>
                        <div className='nav-link'>
                            <NavLink className="link" to={`/${link.name}`}>{link.name}</NavLink>
                            {link.submenu &&(
                                <div>
                                    <div key={link.name} className='float sublinks' id={`sub-${index}`}>
                                        <div className='float pin'></div>
                                        <div className='float pin2'></div>
                                        {link.sublinks.map((sublinks, index) => (
                                            <div key={index} className={`sub-sub-${index}`}>
                                                <NavLink className='head-link' to={`/${link.name}/${sublinks.head}`}>{sublinks.head}</NavLink> 
                                                {sublinks.sublink && (
                                                    sublinks.sublink.map((sLink, iKey)=>(
                                                        <div key={iKey}>
                                                            <li><NavLink className='head-link__sub' to={`/${link.name}/${sublinks.head}`}>{sLink.name}</NavLink></li>
                                                        </div>
                                                    ))
                                                )} 
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </>
    )
    
}