import image from "../../images/no-virus.png";
import { ContactInfoCard } from "..";

function OzoneLandingSection() {
  return (
    <section id="kezdolap">
      <div className="landingContent">
        <div className="landingTextImg">
          <div className="landingText">
            <h2 className="landingTitle">
              Tiszta és egészséges légkör megteremtése
            </h2>
            <h5 className="landingSubtitle">
              Fertőtlenítő szolgáltatás lakások, irodák, iskolák, egészségügyi
              intézmények és nagyobb terek tisztítására is
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

export default OzoneLandingSection;
