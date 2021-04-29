import { React, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Car from "../../resources/car.svg"
import "./SpringDemo.css"
import Cloud from "../../resources/cloud.svg"

const SpringDemo = () => {
  const [flip, setFlip] = useState(0)
  const n = useRef(0)
  const styles = useSpring({
    from: {
      marginLeft: "-15vw",
      height: 100,
      width: 100,
    },
    to: {
      marginLeft: "110vw",
      height: 100,
      width: 100,
    },
    config: {
      duration: 9000,
    },
    loop: {
      reset: true,
    },
    onRest: () => {
      setFlip(180)
    }
  })
  
  const stylesCloud = useSpring({
    from: {
      rotate: 0,
      marginLeft: "-15vw",
      height: 50,
      width: 50,
      marginTop: "1.5vw",
    },
    to: {
      rotate: -500,
      marginLeft: "110vw",
      height: 50,
      width: 50,
      marginTop: "1.5vw",
    },
    config: {
      duration: 9000,
    },
    loop: {
      reset: true,
    },
    onRest: () => {
      setFlip(180)
    }
  })

  return (
    <div className="carWrapper">
      <animated.img
        src={Car}
        height={50}
        width={50}
        style={{
          rotate: 0,
          display: "flex",
          position: "fixed",
          paddingLeft:"50px",
          ...styles
        }}
        />
        <animated.img
          src={Cloud}
          width={20}
          height={20}
          style={{
            height: "20px",
            position: "fixed",
            display: "flex",
            ...stylesCloud
          }}
      />
    </div>
  )
}

export default SpringDemo
