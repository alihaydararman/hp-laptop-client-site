import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [serviceId])
    // let singleDetails = details.find(prod => parseInt(prod._id) === parseInt(serviceId))
    // if (typeof (singleDetails) == 'undefined') {
    //     singleDetails = '';
    // }
    return (
        <div className='container ' style={{ alignItems: 'center', width: '700px', height: '200px' }}>
            <h2>Product Details Id: {serviceId}</h2>

            <div className="card mb-3">
                <img src={details.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    <p className="card-text">{details.description}</p>
                    <h4 className="card-text"><small className="text-muted">Price :{details.price}</small></h4>
                    <h4 className="card-text"><small className="text-muted">Package :{details.packege}</small></h4>
                    <Link to='/orderproduct'><button className="btn btn-primary">Confirm Booking</button></Link>
                </div>
            </div>


        </div>
    );
};

export default Details;