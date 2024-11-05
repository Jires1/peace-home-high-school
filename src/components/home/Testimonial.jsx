import user from './../../assets/img/testimonials/user.png'

export default function Testimonial({author, job, children}) {
    return(
        <div className="row card__content">
            <div className="row card__info">
                <img className='card__info-img' src={user}  alt="" />
                <p className="card__info-text">
                    <span >{author}</span><br />
                    <span >{job}</span>
                </p>
            </div>

            <div className="card__testimonial">
            {children}
            </div>
        </div>

    )
}