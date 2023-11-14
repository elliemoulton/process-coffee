// import type { MetaFunction } from '@remix-run/node';
import Navbar from '../components/navbar';

// components
import SubscriptionCard from '../components/subscriptionCard';
import BrowseCard from '../components/browseCard';

// imgs
import BaristaCardImg1 from '../../public/imgs/barista-card1.svg';
import BaristaCardImg2 from '../../public/imgs/barista-card2.svg';
import CoffeeRoast1 from '../../public/imgs/coffee-roast1.png';
import CoffeeRoast2 from '../../public/imgs/coffee-roast2.png';
import CoffeeRoast3 from '../../public/imgs/coffee-roast3.png';
import Player from '../../public/imgs/player.png';

// import { Link, LiveReload } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

// styles
import styles from '../../src/styles/styles.css';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

// components

// export const meta: MetaFunction = () => {
//     return [
//         { title: 'New Remix App' },
//         { name: 'description', content: 'Welcome to Remix!' },
//     ];
// };

export default function Index() {
    return (
        <>
            <header>
                {/* <LiveReload /> */}
                <Navbar />
                <div className='video-header'>
                    <h1>Welcome to the Process.</h1>
                    <p>
                        A small scale specialty coffee roaster nestled in Santa
                        Monica, California, offering sustainably and ethically
                        sourced coffee roasts.
                    </p>
                    <button>Shop Now</button>
                </div>
            </header>

            <div className='sales-area'>
                <h2>Stay caffeinated with a coffee subscription.</h2>
                <table>
                    <tr>
                        <td className='card1'>
                            <SubscriptionCard
                                img={BaristaCardImg1}
                                title='Barista'
                                cost='$30'
                                content='Choose from our full selection of specialty coffee roasts and receive 2 bags each month (every 2 weeks).'
                            />
                        </td>
                        <td className='card2'>
                            <SubscriptionCard
                                img={BaristaCardImg2}
                                title='Enthusiast'
                                cost='$42'
                                content='Choose from our full selection of specialty coffee roasts and receive 4 bags each month (every week).'
                            />
                        </td>
                    </tr>
                </table>
                <table className='browse'>
                    <tr>
                        <td className='col1'>
                            <h3>
                                Browse our full collection of specialty coffees.
                            </h3>
                            <p>
                                We roast our coffee beans every week, offering
                                you a fresh selection of light and medium
                                roasts. Explore all of our available products.
                            </p>
                            <button>Shop Now</button>
                        </td>
                        <td className='col2'>
                            <BrowseCard
                                img={CoffeeRoast1}
                                title='Process Blend'
                                cost='$15.00'
                                notes='Chocolate - Nutty - Bright Acidity'
                            />
                        </td>
                        <td className='col3'>
                            <BrowseCard
                                img={CoffeeRoast2}
                                title='Uganda Sipi Falls Washed'
                                cost='$18.00'
                                notes='orange - walnut - thick - bright'
                            />
                        </td>
                        <td>
                            <BrowseCard
                                img={CoffeeRoast3}
                                title='Colombia Decaf'
                                cost='$16.00'
                                notes='citrus - graham cracker - honey'
                            />
                        </td>
                    </tr>
                </table>
            </div>
            <div className='player-highlight'>
                <div className='text'>
                    <h3>Keeping John Smith fueled for every game.</h3>
                    <p>
                        Sed tristique sed nam enim ultrices donec quis rhoncus
                        nec. Bibendum gravida turpis mi nunc. Ut orci velit
                        ornare faucibus dignissim pulvinar leo posuere.
                    </p>
                    <button>Learn More</button>
                </div>
                <img src={Player} alt='soccer player kicking ball' />
            </div>
            <div className='brew-guides'>
                <h2>Learn how to brew the perfect cup of coffee.</h2>
            </div>
        </>
    );
}
