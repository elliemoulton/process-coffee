import { useState } from 'react';
import { Link } from '@remix-run/react';

import CardImg from '../../public/imgs/coffee-roast1.png';
import ArrowRight from '../../public/imgs/arrow-right.svg';
import ArrowRightShadow from '../../public/imgs/arrow-right-shadow.svg';
import ArrowLeftShadow from '../../public/imgs/arrow-left-shadow.svg';

import ArrowLeft from '../../public/imgs/arrow-left.svg';

const items = [
    {
        id: 0,
        brewType: 'French Press',
        class: 'french-press',
        img: CardImg,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: '/demo',
    },
    {
        id: 1,
        brewType: 'V60',
        class: 'v60',
        img: CardImg,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: '/demo',
    },
    {
        id: 2,
        brewType: 'Chemex',
        class: 'chemex',
        img: CardImg,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: '/demo',
    },
    {
        id: 3,
        brewType: 'Cold Brew',
        class: 'cold-brew',
        img: CardImg,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: '/demo',
    },
    {
        id: 4,
        brewType: 'Classic Drip',
        class: 'classic-drip',
        img: CardImg,
        requirement1: '32 grams of coffee (coarse grind)',
        requirement2: '500 grams of water (90°c)',
        instructions1:
            'French press is a quick and consistent brew method that produces a flavorful and full-bodied cup of coffee, without taking up too much space or time.',
        instructions2:
            'Learn more about how we prefer to make the perfect cup of coffee using a french press.',
        url: '/demo',
    },
];

const BrewGuideCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [arrowRight, setArrowRight] = useState(ArrowRightShadow);
    const [arrowLeft, setArrowLeft] = useState(ArrowLeftShadow);
    // const [rotate, setRotate] = useState(0);

    const Card = ({ item }) => {
        //     if (items.id === activeIndex + 1) {
        //         setRotate(5);
        //         console.log('positive rotate');
        //     } else if (items.id === activeIndex - 1) {
        //         setRotate(-5);
        //         console.log('negative rotate');
        //     }

        return (
            <>
                <div
                    className={`${item.class} brew-guide-card`}
                    // style={{
                    //     transform: `
                    //          rotate(${rotate}deg)`,
                    // }}
                >
                    <div className='column-1'>
                        <h3>{item.brewType}</h3>
                        <img src={item.img} alt={item.brewType} />
                        <p>Requirements</p>
                        <ul>
                            <li>{item.requirement1}</li>
                            <li>{item.requirement2}</li>
                        </ul>
                    </div>
                    <div className='column-2'>
                        <p>{item.instructions1}</p>
                        <p>{item.instructions2}</p>
                        <Link to={item.url}>Read the full guide</Link>
                    </div>
                </div>
            </>
        );
    };

    const updateIndex = (newIndex) => {
        if (newIndex <= -2) {
            newIndex = -2;
            // makes it so it can't scroll past #5, if you center cards, it starts at index 2
            // first # is index it starts on and second # is index is 1 more
        } else if (newIndex >= items.length - 2) {
            newIndex = items.length - 3;
        }
        setActiveIndex(newIndex);

        console.log('activeIndex ' + activeIndex);
        console.log('newIndex ' + newIndex);
    };

    const slideRight = () => {
        updateIndex(activeIndex - 1);
    };

    const slideLeft = () => {
        updateIndex(activeIndex + 1);
    };

    const handleMouseEnterLeft = () => {
        setArrowLeft(ArrowLeft);
    };

    const handleMouseLeaveLeft = () => {
        setArrowLeft(ArrowLeftShadow);
    };

    const handleMouseEnterRight = () => {
        setArrowRight(ArrowRight);
    };

    const handleMouseLeaveRight = () => {
        setArrowRight(ArrowRightShadow);
    };

    return (
        <>
            <div className='card-container'>
                <div
                    className='inner'
                    style={{
                        transform: `translate(${activeIndex * 20}%)`,
                    }}
                    // % is 100/number of cards so 100/5=20
                >
                    {items.map((item) => {
                        return <Card key={item.id} item={item} />;
                    })}
                </div>
            </div>
            <div className='buttons'>
                <img
                    src={arrowLeft}
                    alt='previous'
                    onMouseEnter={handleMouseEnterLeft}
                    onMouseLeave={handleMouseLeaveLeft}
                    onClick={slideLeft}
                />
                <img
                    src={arrowRight}
                    alt='next'
                    onMouseEnter={handleMouseEnterRight}
                    onMouseLeave={handleMouseLeaveRight}
                    onClick={slideRight}
                />
            </div>
        </>
    );
};

export default BrewGuideCards;
