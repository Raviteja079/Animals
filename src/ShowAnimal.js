import {useState} from 'react'
import dog from './svg/dog.svg'
import cat from './svg/cat.svg'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import './ShowAnimal.css'

function ShowAnimal({animalToShow}){
    const [clicks, setClicks] = useState(0)
    const animalsObj = {dog, cat, bird, cow, gator, horse}
    const handleClick = ()=>{
        setClicks(clicks + 1)
    }
    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt='animal' src={animalsObj[animalToShow]} />
            <img className='heart' alt='heart' src={heart} style={{width: 10 + 10 * clicks + "px"}} />
        </div>
    )
}

export default ShowAnimal