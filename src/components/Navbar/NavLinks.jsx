import './NavLinks.css'
export default function NavLinks () {

    const links = [
        {'name' : 'Home'},
        {'name' : 'Discover', submenu:true, sublinks:[
            {
                head:"Our History",
            },{
                head:"Actualities",
            }]},
        {'name' : 'Study at P.H.C.H.S', submenu:true, sublinks:[
            {
                head:'Ordinary secondary cycle',
                sublink:[
                    {name:'Arts'},
                    {name:'Science'},
                ]
            },
            {
                head:'Advance secondary cycle',
                sublink:[
                    {name:'Arts'},
                    {name:'Science'},
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
                            <a className="link" href=''>{link.name}</a>
                            {link.submenu &&(
                                    <div>
                                        <div key={link.name} className='float sublinks'>
                                            <div className='float pin'></div>
                                            <div className='float pin2'></div>
                                            {link.sublinks.map(sublinks => (
                                                <div>
                                                    <a className='head-link' href="">{sublinks.head}</a> 
                                                    {sublinks.sublink && (
                                                        sublinks.sublink.map(sLink=>(
                                                            <div>
                                                                <li><a className='head-link__sub' href="">{sLink.name}</a></li>
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