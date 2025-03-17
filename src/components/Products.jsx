// Display the Products in Card format through the give API: https://fakestoreapi.com/products
import React, {useEffect, useState} from 'react';

const Products = () => {
    const [productsList, setProductList] = useState([]);

    useEffect(() => {
        try{
            async function fetchData() {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProductList(data);
                console.log(data);
            }
            fetchData();
        }
        catch(err){
            console.log("get an Error while fetching data: ", err);
            return;
        }
    },[])

    return (
        <div>
            {productsList.map((product,index) => (
                <div key={index}>
                    {product.title}
                </div>
            ))}
        </div>
    );
}

export default Products;