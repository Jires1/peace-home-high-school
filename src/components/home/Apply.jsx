import './Apply.css'
import { GoArrowRight } from 'react-icons/go'
export default function Apply() {
    return(
        <div className="home__apply">
            <div className="row apply">
                <h2 className="left-text">Ready to chase your dreams?</h2>
                <button className="btn btn-apply row"><a href={`/Study at P.H.C.H.S`}> Resgitration details </a><GoArrowRight /> </button>
            </div>
        </div>
    )
}