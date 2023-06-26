import css from "../../assets/img/css.png"
import html from "../../assets/img/html.png"
import js from "../../assets/img/js.png"
import cpp from "../../assets/img/cpp.png"
import react from "../../assets/img/react.png"
import bootstrap from "../../assets/img/bootstrap.png"
import github from "../../assets/img/github.png"
import dsa from "../../assets/img/dsa.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"



export const Skills = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomOut">
              <h2>Skills</h2>
              <p className=" capitalize">These are some of the skills that I have as a programmer and front-end developer</p>

              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={900} className="owl-carousel owl-theme skill-slider cursor-pointer">
                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={dsa} alt="Image" />
                  <h5>DSA</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JAVA SCRIPT</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>REACT</h5>
                </div>

                <div className="item">
                  <img src={github} alt="Image" />
                  <h5>GITHUB</h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>BOOTSTRAP</h5>
                </div>

              </Carousel>


            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

/*
 <div className="item">
                  <img src={solidity} alt="Image" />
                  <h5>SOLIDITY</h5>
                </div>
*/