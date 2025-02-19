import { useNavigate } from "react-router-dom";

export default function VodItem(props) {

    let item = props.item;

    const navigate =  useNavigate();
    const handleMoreInfoClick = () => {
        navigate(`/info/${item.imdbID}`)
    }


    return (
        <div id="div_item" className='col-md-4 border border-2 border-dark p-2'>
            <img src={item.Poster} alt={item.Title}></img>
            <div className="text-container">
                <h3>{item.Title}</h3>
                <div className='fs-4 fw-bold '>Year: {item.Year}</div>
                <button onClick={handleMoreInfoClick} id='info_btn' className='btn btn-danger'>More Info</button>
            </div>
        </div>
    )
}
