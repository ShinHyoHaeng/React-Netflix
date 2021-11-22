import React from 'react';
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            {/* Navbar 컴포넌트 연결 */}
            <Navbar/> 

            {/* Featured 컴포넌트 연결 */}
            <Featured />
            
            {/* List 컴포넌트 연결 */}
            <List title="Popular movies"/> 
        </div>
    )
}

export default Home;


