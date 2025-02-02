import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("authToken");
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/product?page=1&limit=10`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data.data || []);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (productId) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/product/${productId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Remove the deleted product from the state
            setProducts(products.filter((product) => product._id !== productId));
            alert("Product deleted successfully!");
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Failed to delete product");
        }
    };

    const handleEdit = (productId) => {
        navigate(`/admin/product/edit/${productId}`); // Redirect to edit page
    };

    if (loading) return <p className="text-center p-4">Loading...</p>;
    if (error) return <p className="text-center p-4 text-red-500">{error}</p>;
    if (!products || products.length === 0) return <p className="text-center p-4">No products found</p>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Product List</h2>
                <Button color="blue" as={Link} to="/admin/product/create">
                    Create
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Discount</th>
                            <th className="p-2 border">Final Price</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="text-center border">
                                <td className="p-2 border">{product.title}</td>
                                <td className="p-2 border">${product.price}</td>
                                <td className="p-2 border">{product.discount}%</td>
                                <td className="p-2 border">${product.actualAmt}</td>
                                <td className="p-2 border">{product.status}</td>
                                <td className="p-2 border">
                                    <div className="flex justify-center space-x-2">
                                        <Button
                                            color="blue"
                                            size="sm"
                                            onClick={() => handleEdit(product._id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            color="red"
                                            size="sm"
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowProduct;