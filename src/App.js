import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product_list from './components/Product_list';
import { useState } from 'react';
import Header from './components/Header'

function App() {
  const [dark,setdark]=useState(true)
  const[category,setCategory]=useState("")
  const[search,setSearch]=useState("")
  
  return (
    <div className="App">
      <Header dark={dark}
      setSearch={setSearch}
      search={search}
      setCategory={setCategory}
      category={category}
      setdark={setdark}/>
      <Product_list
      search={search}
      category={category}
      dark={dark}
      />
        
    </div>
  );
}

export default App;
