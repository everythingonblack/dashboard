import React, { useState, useEffect } from 'react';


const DigitalProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('https://bot.kediritechnopark.com/webhook/store-dev/add-product', { // Assumed endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          type: newProductType,
          name: newProductName,
          description: newProductDescription,
          price: newProductPrice,
          duration: newProductDuration,
          sub_product_of: newProductSubProductOf,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts([...products, data]);
      setShowModal(false);
      setNewProductName('');
      setNewProductDescription('');
      setNewProductPrice('');
      setNewProductDuration('');
      setNewProductSubProductOf('');
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error, e.g., display error message
    }
  };
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newProductType, setNewProductType] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductDuration, setNewProductDuration] = useState('');
  const [newProductSubProductOf, setNewProductSubProductOf] = useState('');


  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchProducts = async () => {
      if (token) {
        try {
          const response = await fetch('https://bot.kediritechnopark.com/webhook/store-dev/get-products', { // Assumed endpoint
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };


    fetchProducts();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleCloseModal = () =>{
     setShowModal(false);
     setNewProductType('');
     setNewProductName('');
     setNewProductDescription('');
     setNewProductPrice('');
     setNewProductDuration('');
     setNewProductSubProductOf('');
  }

  return (
    <div className="bg-white p-4 rounded-md shadow">
       <h1 className="text-2xl font-bold">Digital Products</h1>
       {products.map((product) => (
         <div key={product.id} className="p-2 border-b border-gray-200">
           <h2 className="text-xl font-medium">{product.name}</h2>
           <p>{product.description}</p>
           <p>Price: {product.price}</p>
           <button onClick={() => { setShowModal(true); setNewProductSubProductOf(product.id); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2">
             Add Sub-Product
           </button>
         </div>
       ))}
       <button onClick={() => setShowModal(true)}>Add Product</button>
       
       {showModal && (
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
           <div className="bg-white p-6 rounded-md shadow">
             <h2 className="text-xl font-bold mb-4">Add New Product</h2>
             <form onSubmit={handleSubmit}>
               <div className="mb-4">
                 <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Type:</label>
                 <input type="text" id="name" name="name" value={newProductType} onChange={(e) => setNewProductType(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div className="mb-4">
                 <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                 <input type="text" id="name" name="name" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div className="mb-4">
                 <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
                 <textarea id="description" name="description" value={newProductDescription} onChange={(e) => setNewProductDescription(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
               </div>
               <div className="mb-4">
                 <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                 <input type="number" id="price" name="price" value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div className="mb-4">
                 <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">Duration:</label>
                 <input type="text" id="duration" name="duration" value={newProductDuration} onChange={(e) => setNewProductDuration(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
               </div>
               <div className="mb-4">
                 <label htmlFor="sub_product_of" className="block text-gray-700 font-bold mb-2">Sub Product Of:</label>
                 <input type="number" id="sub_product_of" name="sub_product_of" value={newProductSubProductOf} onChange={(e) => setNewProductSubProductOf(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
               </div>
               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                 Add
               </button>
               <button type="button" onClick={() => handleCloseModal()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md ml-2 focus:outline-none focus:shadow-outline">
                 Cancel
               </button>
             </form>
           </div>
         </div>
       )}
     </div>
   );
 };
 

 

 export default DigitalProducts;

