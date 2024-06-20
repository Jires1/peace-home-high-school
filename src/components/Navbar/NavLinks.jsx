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
                    {name:'Electricity'},
                    {name:'Home Economics'},
                    {name:'Motor Mechanics'},
                    {name:'Modern Computer Laboratry'},
                    {name:'Building and Construction'},
                    {name:'Fashion design'},
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
                            <a className="link" href={`/${link.name}`}>{link.name}</a>
                            {link.submenu &&(
                                    <div>
                                        <div key={link.name} className='float sublinks' id={`sub-${index}`}>
                                            <div className='float pin'></div>
                                            <div className='float pin2'></div>
                                            {link.sublinks.map((sublinks, index) => (
                                                <div className={`sub-sub-${index}`}>
                                                    <a className='head-link' href={`/${sublinks.head}`}>{sublinks.head}</a> 
                                                    {sublinks.sublink && (
                                                        sublinks.sublink.map(sLink=>(
                                                            <div>
                                                                <li><a className='head-link__sub' href={`/${sublinks.head}`}>{sLink.name}</a></li>
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