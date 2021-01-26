import Header from "../components/header.js";

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
