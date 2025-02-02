import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "active",
        images: [],
        category: "",
        brand: "",
        price: "",
        discount: "",
        seller: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const token = localStorage.getItem("authToken");
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/product/${productId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setFormData(data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("Failed to load product details");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("authToken");

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/product/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Product updated successfully:", data);
            alert("Product updated successfully!");
            navigate("/admin/product"); // Redirect to product list
        } catch (error) {
            console.error("Error updating product:", error);
            setError("Failed to update product");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p className="text-center p-4">Loading...</p>;
    if (error) return <p className="text-center p-4 text-red-500">{error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <Label htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <Label htmlFor="description" value="Description" />
                    <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Status */}
                <div>
                    <Label htmlFor="status" value="Status" />
                    <Select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </Select>
                </div>

                {/* Category */}
                <div>
                    <Label htmlFor="category" value="Category ID" />
                    <TextInput
                        id="category"
                        name="category"
                        type="text"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Brand */}
                <div>
                    <Label htmlFor="brand" value="Brand ID" />
                    <TextInput
                        id="brand"
                        name="brand"
                        type="text"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Price */}
                <div>
                    <Label htmlFor="price" value="Price" />
                    <TextInput
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Discount */}
                <div>
                    <Label htmlFor="discount" value="Discount (%)" />
                    <TextInput
                        id="discount"
                        name="discount"
                        type="number"
                        value={formData.discount}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Seller */}
                <div>
                    <Label htmlFor="seller" value="Seller ID" />
                    <TextInput
                        id="seller"
                        name="seller"
                        type="text"
                        value={formData.seller}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <Button type="submit" color="blue" disabled={loading}>
                    {loading ? "Updating..." : "Update Product"}
                </Button>
            </form>
        </div>
    );
};

export default EditProduct;