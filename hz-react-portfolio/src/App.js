import './/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import Header from "./components/Topbottom/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Contact from "./components/About/Contact";
import Footer from "./components/Topbottom/Footer";
import Grid from "./components/Grid/Grid"
// import Resume from './components/Resume';
// function createMastText () {
//   let addr = window.location.href.split("/")
//   let url = addr[addr.length-1];
//   console.log(url)
//   // const url = "/"
//   if ( url === '') {
//     return {headerText: 'Future Product Manager', subHeaderText: ''};
//   } 
//   else if ( url === 'about') {
//     return {headerText: 'OUR STORY', subHeaderText: 'Founded in San Diego, California'};
//   } 
//   else if ( url === 'contact') {
//     return {headerText: 'example head text', subHeaderText: 'example sub text'};
//   } 


// }
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
        <About />
        <Grid />
        <Footer />
      </div>
    
  );
}


export default App;