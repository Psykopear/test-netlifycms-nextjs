const Section = ({ dark, children }) => {
  const background = dark ? "dark" : "light";
  return (
    <div class={`section ${background}`}>
      <div class="text-wrapper">{children}</div>
    </div>
  );
};

export default Section;
