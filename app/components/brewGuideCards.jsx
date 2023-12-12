import { useState } from 'react';

import CardImg from '../../public/imgs/coffee-roast1.png';

const items = [
    {
        id: 0,
        brewType: 'French Press',
        img: CardImg,
        requirements: 'Requirements 32 grams of coffee',
        instructions: 'French press is a quick and consistent brew method',
    },
    {
        id: 1,
        brewType: 'V60',
        img: CardImg,
        requirements: 'Requirements 28 grams of coffee',
        instructions: 'V60 is a quick and consistent brew method',
    },
    {
        id: 2,
        brewType: 'Chemex',
        img: CardImg,
        requirements: 'Requirements 22 grams of coffee',
        instructions: 'Chemex is a quick and consistent brew method',
    },
];

const Card = ({ item }) => {
    return (
        <div className='brew-guide-card'>
            <img src={item.img} alt={item.brewType} />
            <h3>{item.brewType}</h3>
            <p>{item.requirements}</p>
            <p>{item.instructions}</p>
            <p>id: {item.id}</p>
        </div>
    );
};

const slideLeft = (item) => {
    console.log('slideLeft');
};

const slideRight = () => {
    console.log('slideRight');
};

const BrewGuideCards = () => {
    return (
        <>
            <div className='card-container'>
                {items.map((item) => {
                    return <Card key={item.id} item={item} />;
                })}
            </div>
            <div className='buttons'>
                <button onClick={slideLeft}>←</button>
                <button onClick={slideRight}>→</button>
            </div>
        </>
    );
};

// old method... didn't work

// const Card = ({
//     img,
//     brewType,
//     requirements,
//     instructions,
//     cardStyle,
//     index,
//     id,
// }) => {
//     return (
//         <div className={`card ${cardStyle}`}>
//             <img src={img} alt={brewType} />
//             <h3>{brewType}</h3>
//             <p>{requirements}</p>
//             <p>{instructions}</p>
//             <p> cardStyle: {cardStyle}</p>
//             <p>index: {index}</p>
//             <p>id: {id}</p>
//         </div>
//     );
// };

// const BrewGuideCards = () => {
//     const [index, setIndex] = useState(0);
//     // const [position, setPosition] = useState('');

//     const slideLeft = () => {
//         setIndex(index - 1);
//         console.log('slideLeft');
//     };

//     const slideRight = () => {
//         setIndex(index + 1);
//         console.log('slideRight');
//     };

//     return (
//         <>
//             <div className='card-container'>
//                 {data.map((card, n) => {
//                     let position =
//                         n > index
//                             ? 'nextCard'
//                             : n === index
//                             ? 'activeCard'
//                             : 'prevCard';

//                     return (
//                         <>
//                             <div className='brew-guide-cards'>
//                                 <Card
//                                     {...card}
//                                     key={index}
//                                     cardStyle={position}
//                                 />
//                             </div>
//                         </>
//                     );
//                 })}
//             </div>
//             <button onClick={slideLeft}>Previous</button>
//             <button onClick={slideRight}>Next</button>
//         </>
//     );
// };

export default BrewGuideCards;

// if (index === 1) {
//     position = 'activeCard';
// } else if (index === 0) {
//     position = 'prevCard';
// } else if (index === 2) {
//     position = 'nextCard';
// } else {
//     setIndex(0);
// }

// if (index === 1) {
//     setPosition('activeCard');
// } else if (index === 0) {
//     setPosition('prevCard');
// } else if (index === 2) {
//     setPosition('nextCard');
// } else {
//     setIndex(0);
// }

// goes below data.map
