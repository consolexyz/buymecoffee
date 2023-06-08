
import Head from 'next/head';
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Buy Me A Coffee</title>
        <meta name="description" content= "Buy xyz a Coffee" />
        <link rel="icon" herf="./favicon.ico" />
      </Head>
      <Header/>
      <Main/>
    </div>
  );
};

export default Home;
