import bg from "../assets/bg.png";
const Pricing = () => {
  return (
    <section className="pricing-container">
      <div className="pricing-content">
        <h1 className="title xxxl">A Price To Suit Everyone</h1>
        <p className="text lg mb">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <h1 className="title xxxl bold">$40</h1>
        <p className="text md mb">UI Design kit</p>
        <p className="text md mb">See, One price. Simple.</p>
        <a href="#" className="btn-primary md">
          Purshar Now
        </a>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};
export default Pricing;
