import Navbar from "./Navbar";
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Head>
        <title>Noon Gallery</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
