import { createRoot } from "react-dom/client";
import Info from "/src/components/Info.jsx";
import About from "/src/components/About.jsx";
import Facts from "/src/components/Facts.jsx";
import Footer from "/src/components/Footer.jsx";

createRoot(document.querySelector("#root")).render(
    <main className="card">
        <Info />
        <About />
        <Facts />
        <Footer />
    </main>
);