import Button from "../common/Button/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      {/* <div className="flex absolute-center hero-claim-label">
        <div></div>
        <div className="claim-anchor">
          Claim now <img src="" alt="claim-image" className="claim-arrow"/>
        </div>
      </div> */}
      <div className="hero-section flex absolute-center flex-col max-width">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button className="flex absolute-center" buttonText={"Download CRED"} />
      </div>
    </div>
  );
};

export default HeroSection;
