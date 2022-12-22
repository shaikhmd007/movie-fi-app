import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
// import About from "./pages/About";
import Image from "./Images/posters.jpg";
function App() {

  // Adding BgIMg And with Style Obj
  const BgPosters = {
    // height: "100vh",
    backgroundImage: `url(${Image}) `,
    backgroundSize: "cover",
    // color: "white",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    // opacity: ".1",
  };
  return (
    <>
      <main style={BgPosters}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/404" element={<NotFound />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
