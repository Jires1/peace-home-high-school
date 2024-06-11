import {useEffect, useState} from 'react'
import imageSlider from './data.home.js'

export default function BackgroundSlider () {

    const [slideindex, setSlideIndex] = useState(0);

    useEffect(()=> {
        const timer = setTimeout(() => {
            if(slideindex === 2){
                setSlideIndex(0)
            }else{
                setSlideIndex(slideindex+1)
            }

        }, 8000);
        return ()=> clearInterval(timer)
    },[slideindex])

    const goToNext = (slideindex) => {
        setSlideIndex(slideindex)
    }
    
    const backgroundStyle = {
        background: `linear-gradient(rgba(203, 205, 214, 0.274), rgba(0, 5, 77, 0.699)), url(/src/assets/img/${imageSlider[slideindex].url})`,
    }

    const changeP = () => {
        console.log("P changed");
    }

    return (
        <div style={backgroundStyle} className="row home__hero">
                <div>
                    <p>{imageSlider[slideindex].paragraph}</p>
                    <h3>{imageSlider[slideindex].title}</h3>

                    <div className='caroussel-boul'>
                        {imageSlider.map((e, index)=>(
                            (index === slideindex ? (<span className='active' key={index} onClick={()=>goToNext(index)} ></span>):(<span key={index} onClick={()=>goToNext(index)} ></span>))
                        ))}
                    </div>

                </div> 
            
        </div>
    )
}