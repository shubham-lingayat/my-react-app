// Product search from JSON in Input tag
import React, {useState} from "react";

const ProductSearch = () =>{
  const products = [
    { id:1, name:"iphone 14"},
    { id:2, name:"iphone 14 Pro"},
    { id:3, name:"iphone 14 Pro Max"},
    { id:4, name:"Samsung S22"},
    { id:5, name:"Samsung S22 Pro"},
    { id:6, name:"Samsung S22  Pro Max"},
    { id:7, name:"Samsung S23 Ultra Pro Max"},
    { id:8, name:"Samsung S23 Lite"},
  ]
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function changeHandler(event){
    const value = event.target.value.toLowerCase();
    setQuery(value);

    setSuggestions(
      value ? (products.filter((p_data) => (p_data.name.toLowerCase().includes(value)))) : ([])
    );
  }
return (
  <div>
    <input type="text" value={query} placeholder="Enter Text to search..." onChange={changeHandler}/>
    {
      suggestions.length > 0 && (
        <ul>
          {suggestions.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>)
    }
    
  </div>
);
}

export default ProductSearch;