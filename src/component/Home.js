import React from 'react'
 import img1 from "../imge/img1.jpeg";
 import img2 from "../imge/img2.jpeg";
import "./Home.css"  ;

 
import useEmblaCarousel from 'embla-carousel-react'

function Home (){ 
 
  const [emblaRef ] = useEmblaCarousel()

  
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide" > < img className='slider_img' src={img1} alt="slider - imge1" ></img></div>
        <div className="embla__slide"> < img className='slider_img' src={img2}  alt="slider - imge1"></img></div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}
 
export default  Home;