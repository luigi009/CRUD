import "./App.css";
import Create from "./components/create/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/read/Read";
import Delete from "./components/delete/Delete";
import Update from "./components/update/Update";

function App() {
  return (
    <>
      <div className="flex items-center flex-col h-screen justify-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">React CRUD</h3>
        </div>

        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Create />} />
              <Route path="read" element={<Read />} />
              <Route path='delete' element={<Delete />} />
              <Route path='update' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
