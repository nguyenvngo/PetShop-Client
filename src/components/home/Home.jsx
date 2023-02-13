import "./Home.css";
import Slider from "react-slick";
import dog1 from "../../asset/images/dog1.jpg";
import dog2 from "../../asset/images/dog2.jpg";
import dog3 from "../../asset/images/dog3.jpg";

const Home = () => {
    
    const arrimg = [dog1,dog2,dog3];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    
    
    return ( 
        <>
            <p className="title">Welcome to my petshop</p>
            <div className="slider-container">
           <Slider {...settings}>
                {arrimg.map((image) => {
                    return(
                        <img className="img-slider" key={image} src={image} alt="" width="100%" />
                    )
                })}
           </Slider>
           </div>
        </>
     );
}
 
export default Home;