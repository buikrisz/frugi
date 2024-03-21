import "./PestLandingSection.css";
import image from "../../images/pest_control.png";
import { ContactInfoCard } from "..";

function LandingSection() {
  return (
    <section id="kezdolap">
      <div className="landingContent">
        <div className="landingTextImg">
          <div className="landingText">
            <h2 className="landingTitle">
              Lakások védelme a váratlan betolakodóktól
            </h2>
            <h5 className="landingSubtitle">
              Ágyi poloska-, csótány-, kártevőirtás magánszemélyeknek,
              közintézményeknek és vállalkozásoknak
            </h5>
          </div>
          <img src={image} alt="Pest Control" />
        </div>
        <ContactInfoCard
          icon="phone"
          title="Hívjon fel"
          text="+36-70-338-4734"
        />
      </div>
    </section>
  );
}

export default LandingSection;
