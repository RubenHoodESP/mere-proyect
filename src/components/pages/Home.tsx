import './Home.css'
import { useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion"

export const Home = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView])

  return (
    <>
      <div id="home" className="custom-background vh-100 d-flex flex-column justify-content-center bg-secondary">
        <motion.h1 ref={ref} className={`${isInView ? "border-animation-true" : "border-animation-false"} text-center text-white`}>Daniel Meré</motion.h1>
        <div className="container">
          <p className='text-white m-5 text-center'>MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU MIAU </p>
        </div>
      </div>
    </>
  )
}
