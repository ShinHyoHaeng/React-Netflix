import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'

export default function List() {
    
    const [isMoved, setIsMoved] = useState(false);
    
    // slider 번호 
    const [slideNumber, setSlideNumber] = useState(0);

    // slider 버튼 이벤트 함수
    const listRef = useRef();

    const handleClick = (direction) => {

        setIsMoved(true)

        let distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                {/* slider 버튼(prev) */}
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}} />

                {/* slider 이미지 영역 */}
                <div className="container" ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>

                {/* slider 버튼(next) */}
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}
