import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
const VanDetail = () => {
    const [van, setVan] = React.useState(null);
    const params = useParams();
    console.log(params);
    
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt="" />
                    < i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div >
            ) : <h2>Loading...</h2>}
    
        </div>
    )
}
export default VanDetail