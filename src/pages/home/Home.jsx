import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

const Home = () => { 
    return (
        <div className="home">
            <Navbar/> {/* Navbar 컴포넌트 연결 */}
            <Featured/> {/* Featured 컴포넌트 연결 */}
            {/* List 컴포넌트 연결 */}
            <List/> 
            <List/> 
            <List/> 
            <List/> 
        </div>
    )
}

export default Home


