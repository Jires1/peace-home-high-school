import Program from './Program.jsx'
import './Programs.css'

const captionData = [
    {
        caption: 'captions/2.png',
        text: 'Good Education System',
        img:'education.jpg',
    },
    {
        caption: 'captions/3.png',
        text: 'Experienced Teachers',
        img:'teacher.jpg',
    },
    {
        caption: 'captions/1.png',
        text: 'High School Diploma',
        img:'degree.jpg',
    }
]

export default function Programs() {
    
    return (
        <div className="home__programs">
            <div className="program__container__title">
                <p className='p-title'>Our Program</p>
                <h2 className='head-title'>What we offer </h2>
            </div> 
            <div className='row program__container__programs'>
                {captionData.map((e, index)=> (
                    <Program caption={e.caption} text={e.text} img={e.img} /> 
                ))}
            </div>
        </div>
    ) 
}