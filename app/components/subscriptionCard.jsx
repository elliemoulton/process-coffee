// import { Link } from '@remix-run/react';

const SubscriptionCard = (props) => {
    return (
        <>
            <div className='subscription-card'>
                <img src={props.img} className='card-img' alt={props.imgAlt} />
                <div className='card-content'>
                    <h4>{props.title}</h4>
                    <p className='cost'>{props.cost} per month</p>
                    <p>{props.content}</p>
                    <button>See Details</button>
                </div>
            </div>
        </>
    );
};

export default SubscriptionCard;
