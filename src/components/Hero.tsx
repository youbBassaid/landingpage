import "../App.css";
import heroimage from "../assets/hero-image.svg";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="title xxxl">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className="text lg mb">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="btn-container">
          <a href="#" className="btn-primary md">
            Purchase UI Kit
          </a>
          <a href="#" className="btn-secondary md ml">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroimage} alt="hero-image" />
      </div>
    </section>
  );
};
export default Hero;
