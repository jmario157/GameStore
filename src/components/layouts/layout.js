import React from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';



const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
            <body>
                <Gifts data={giftData}></Gifts>
                <Games data={gamesData}></Games>
                <Relases data={relasesData}></Relases>
            </body>
        </>
        
    );
}

export default Layout;