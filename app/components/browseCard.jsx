const BrowseCard = (props) => {
    return (
        <>
            <div className='browse-card'>
                <img src={props.img} className='card-img' alt={props.title} />
                <div className='card-content'>
                    <p className='title'>{props.title}</p>
                    <p className='cost'>{props.cost}</p>
                    <p className='notes'>{props.notes}</p>
                </div>
            </div>
        </>
    );
};

export default BrowseCard;
