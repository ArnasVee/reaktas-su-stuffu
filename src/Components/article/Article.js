import {useState} from "react";
const Article = (props)=>{
    const [showDiv,setShowDiv] = useState(false)
    // const [movies, setMovies]=useState({})

    const showDivHandler = () =>{
        setShowDiv(true)
    }
    return(
        <div className="col-lg-6 col-xxl-4 mb-5">
            <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        {showDiv && <div>Mane paspaude</div>}
                        <i className={props.icon}></i>
                    </div>
                    <h2 className="fs-4 fw-bold">{props.title}</h2>
                    <p className="mb-0">{props.description}</p>
                    <a onClick={showDivHandler}>Paspausk</a>
                </div>
            </div>
        </div>
    )
}
export default Article