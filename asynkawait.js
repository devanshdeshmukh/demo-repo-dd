async function fetchProducts(){
    try{
        console.log("fetching products...");
        
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        console.log("Products recived:", data);
    }catch (error){
        console.log("Error fetching products:", error);
    }
}
fetchProducts();