import './/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Resume from './components/Resume';

function App()  {
  const [currentPage, setPage] = useState("Header");

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    // if (page === 'Resume') {
    //   return <Resume />;
    // }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setPage(page);

  return (
      <div className="App">
        <Header />
        <div currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
       
        <Footer />
      </div>
    
  );
}


export default App;