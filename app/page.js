import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import SectionContact from "./components/SectionContact";

export default function Home() {
  return (
    <main className="w-full" style={{background : "#FFFFF7"}}>
      <Section1 />

      <div id="section1">
        <Section2 />
      </div>
      <Section3 />
      <div id="section2">
        <Section4 />
      </div>
      <Section5 />
      <div id="section3">
        <Section6 />
      </div>
      <div id="section4">
        <Section7 />
      </div>
      <div id="section5">
        <Section8 />
      </div>
      <div id="sectionContact">
        <SectionContact />
      </div>
    </main>
  );
}
