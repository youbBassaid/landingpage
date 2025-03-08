interface IntroProps {
  ImgUrl: string;
  Title: string;
  Text: string;
}

const Intro = ({ ImgUrl, Title, Text }: IntroProps) => {
  return (
    <section className="intro-container">
      <div className="intro-img">
        <img src={ImgUrl} alt="" />
      </div>
      <div className="intro-text">
        <h1 className="title xxxl">{Title}</h1>
        <p className="text lg">{Text}</p>
      </div>
    </section>
  );
};
export default Intro;
