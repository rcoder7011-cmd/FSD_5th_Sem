import React from 'react'
import Counter from './Counter';

export default function ImageRotator() {
    const [rotation, setRotation] = React.useState(0);


     let RRHandle =()=>{
        setRotation(prev => prev + 90);
     } 

     let LRHandle =()=>{
        setRotation(prev => prev - 90);
     } 
  return (
    <>
    <h1>Image Rotator</h1>
    <img alt="Image here" 
    style={{height: '200px' , width: '200px', transform: `rotate(${rotation}deg)`}}
     src="https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/55215/defender-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80"
    />
    <br></br>
    <button onClick={LRHandle}>Rotate Left</button>
    &nbsp;
    &nbsp;
    &nbsp;
    <button onClick={RRHandle}>Rotate Right</button>

    <br></br>
    <Counter />

    </>
  )
}
