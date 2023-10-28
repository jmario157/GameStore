import React from 'react';
import Header from '../header/header';
import Games from '../block/block-Games';
import Upcoming from '../block/block-UpcomingRelases';
import Gifts from '../block/block-Gift';
import { Footer } from '../footer/footer';


export const Layout = () => {
    return (
        <div>
            <Header />
            <body>
                <Gifts></Gifts>
                <Games></Games>
                <Upcoming></Upcoming>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}