import Section from "../components/section.js";
import Link from "next/link";
import { attributes, react as Content } from "../content/research.md";

const Research = () => {
  const { papers } = attributes;
  return (
    <div className="wrapper">
      <Section>
        <>
          <Content />
          <ol reversed>
            {papers.map((p) => (
              <li key={p.title}>
                {p.author} <i>{`"${p.title}"`}</i> {p.extra}{" "}
                {p.links.map((l) => (
                  <>
                    <Link key={l.url} href={l.url}>
                      {l.name}
                    </Link>{" "}
                  </>
                ))}{" "}
                ({p.year})
              </li>
            ))}
          </ol>
        </>
      </Section>
    </div>
  );
};

export default Research;
