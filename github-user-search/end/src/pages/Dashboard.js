import React from 'react';
import { Info, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
function Dashboard() {
    const { isLoading } = React.useContext(GithubContext);
    if (isLoading) {
        return (
            <main>
                <Navbar></Navbar>
                <Search></Search>
                <img
                    src={loadingImage}
                    className='loading-img'
                    alt='loading'
                ></img>
            </main>
        );
    }
    return (
        <main>
            <Navbar></Navbar>
            <Search></Search>
            <Info></Info>
            <User></User>
        </main>
    );
}

export default Dashboard;
