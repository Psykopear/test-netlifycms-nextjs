const Splash = ({ title, description, email, links }) => {
  return (
    <div class="splash-wrapper">
      <div class="splash">
        <img class="photo" src="foto.jpg" />
        <div class="content">
          <h1 class="head">{title}</h1>
          <p class="subhead">{description}</p>
          <div class="contacts" id="_contacts">
            <div>
              <b>Email</b>
              <pre>
                <a href={`"mailto:${email}"`}>{email}</a>
              </pre>
            </div>
            {links.map((l) => (
              <div>
                <b>{l.name}</b>
                <pre>
                  <a href={`"${l.url}"`}>Download</a>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
