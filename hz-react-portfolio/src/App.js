import './/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import Header from "./components/Topbottom/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Contact from "./components/About/Contact";
import Footer from "./components/Topbottom/Footer";
import Grid from "./components/Grid/Grid"
import FooterMast from "./components/Topbottom/FooterMast";


function App()  {
  // const [currentPage, setPage] = useState("About");

  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   // if (page === 'Resume') {
  //   //   return <Resume />;
  //   // }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  // };

  // const handlePageChange = (page) => setPage(page);

  return (
      <div className="App">
        <Header />
        {/* // currentPage={currentPage} handlePageChange={handlePageChange} 
        // {renderPage()} */}
        <About path="/About" />
        <Grid />
        <FooterMast />
        <Footer />
      </div>
    
  );
}


export default App;