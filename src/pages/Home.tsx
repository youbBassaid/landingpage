import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Undraw from "../components/Undraw";
import introimg from "../assets/intro-img.png";
import introimg2 from "../assets/intro-img2.png";
import Cta from "../components/Cta";
import Pricing from "../components/Pricing";

function Home() {
  return (
    <>
      <Hero />
      <Undraw />
      <Intro
        ImgUrl={introimg}
        Title="Light, Fast & Powerful"
        Text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />
      <Intro
        ImgUrl={introimg2}
        Title="Light, Fast & Powerful"
        Text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      />
      <Cta />
      <Pricing />
    </>
  );
}
export default Home;
