import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Details from "./component/Details/Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./component/Home/Home";
import NavMenu from "./component/NavMenu/NavMenu";

function App() {
    return (
        <div className="App">
            <NavMenu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/details/:id" element={<Details />}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
