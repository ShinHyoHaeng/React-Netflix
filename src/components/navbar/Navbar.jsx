import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useState } from 'react'

 const Navbar = () => {
    // 스크롤을 내리면 배경색이 들어가고 다시 스크롤이 최상단으로 올라가면 배경색이 투명하게 바뀌도록 하는 함수
    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0? false:true);
        return () => {window.onscroll = null};
    }
    console.log(isScrolled);

    return (
        // 스크롤이 움직이면 navbar 클래스에 scrolled 클래스 추가
        <div className={isScrolled ? "navbar scrolled":"navbar"}> 
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                    
                    {/* 추후에 페이지를 만든 후 수정할 예정 */}
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" /> 
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
         </div>
     )
 }
 
 export default Navbar