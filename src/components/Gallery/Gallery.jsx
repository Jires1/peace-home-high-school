import './Gallery.css'

export default function Actualities () {
    return (
        <section className="row actualities">
            
            <div className="actualities__container">
                <h1 className="head-title">PEACE HOME COMPREHENSIVE HIGH SCHOOL</h1>
                <div className="row about-name">
                    <article>
                        <p className='p-text'>School Gallery</p>
                    </article>
                </div>
            </div>

            <div className="photo-gallery">

                <div className="gallery-grid">
                    {[...Array(26).keys()].map((img, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={`/src/assets/actualities/img (${img}).jpeg`} />
                    </div>
                    ))}
                </div>
                </div>
        </section>
    )
}