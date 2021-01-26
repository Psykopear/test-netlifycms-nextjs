import Section from "../components/section.js";
import { react as Content } from "../content/research.md";

const Research = () => {
  return (
    <div className="wrapper">
      <Section>
        <Content />
      </Section>
    </div>
  );
};

export default Research;
