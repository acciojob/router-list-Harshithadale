
import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const App = () => {
  const {id} = useParams()
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<ItemList/>}/>
        <Route path={`/items/:id`} element={<ItemDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
