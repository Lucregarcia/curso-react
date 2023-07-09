import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
    return (
    <div>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item" element={<ItemDetailConteiner itemId={2} />} />
                
            </Routes>
        </BrowserRouter>
    </div>  
    );
}
export default App; 