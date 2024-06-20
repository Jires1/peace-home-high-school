import provisor from '/src/assets/philosophiy/provisor.jpg'
import './Philosophy.css'

export default function Philosophy () {
    return(
        <div className="home__philosophy white-grey">
            <div className="philosophy__container">
                <div className="philosophy__container__title">
                    <p className='p-title'>Our Philosophy</p>
                    <h2 className='head-title'>Our school philosophy</h2>  
                </div>
            </div>

            <div className="row philosophy__container__topic">
                <div className="topic__provisor-img">
                    <img src={provisor} alt="PEACE HOME COMPREHENSIVE HIGH SCHOOL provisor"/>
                </div>
                <div className="topic__quotes">
                    <h2 className="head-title">The Fondator</h2>
                    <ul className="row quote-list">
                        <li className="row quote"><p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus aliquam consequatur voluptatum? A odit labore esse voluptatum nostrum officia incidunt eum, voluptatem cupiditate obcaecati placeat illum. Enim minima necessitatibus fugiat reiciendis, ab velit! Tempore in voluptates, hic delectus sequi nisi maiores quas itaque sed libero nemo? Dignissimos esse delectus recus...
                        </p>
                            <a href="">Read more <span className="arrow-right"></span></a>
                        </li>

                        <li className="row quote"><p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus aliquam consequatur voluptatum? A odit labore esse voluptatum nostrum officia incidunt eum, voluptatem cupiditate obcaecati placeat illum. Enim minima necessitatibus fugiat reiciendis, ab velit! Tempore in voluptates, hic delectus sequi nisi maiores quas itaque sed libero nemo? Dignissimos esse delectus recus...
                        </p>
                            <a href="">Read more <span className="arrow-right"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}