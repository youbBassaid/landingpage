import undrawimg from "../assets/section_bg.png";
import UndrawChilds from "./UndrawChild";
const Undraw = () => {
  return (
    <section className="undraw-container">
      <div className="undraw-content">
        <div className="undraw-description">
          <h1 className="title xxxl">Light, Fast & Powerful</h1>
          <p className="text lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="undraw-childs">
          <UndrawChilds />
          <UndrawChilds />
        </div>
      </div>
      <div className="undraw-img">
        <img src={undrawimg} alt="" />
      </div>
    </section>
  );
};
export default Undraw;
