import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addtask" element={<AddTask />} />
        <Route exact path="/alltasks" element={<AllTasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;