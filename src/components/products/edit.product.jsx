import { useState } from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "active",
        images: [], // Store uploaded images as files
        category: "",
        brand: "",
        price: "",
        discount: "",
        seller: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files); // Convert FileList to an array
        setFormData({
            ...formData,
            images: files, // Store the uploaded files
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("authToken"); // Get auth token from storage

        // Create FormData for file uploads
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("status", formData.status);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("brand", formData.brand);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("discount", formData.discount);
        formDataToSend.append("seller", formData.seller);

        // Append each image file to FormData
        formData.images.forEach((file, index) => {
            formDataToSend.append("images", file); // Use "images" as the field name
        });

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/product`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in request
                },
                body: formDataToSend, // Send FormData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Product created successfully:", data);
            alert("Product created successfully!");
            // Reset form after successful submission
            setFormData({
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
        } catch (error) {
            console.error("Error creating product:", error);
            setError("Failed to create product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <Label htmlFor="title" value="Title" />
                    <TextInput
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Product Four"
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
                        placeholder="Test Description"
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

                {/* Images */}
                <div>
                    <Label htmlFor="images" value="Upload Images" />
                    <input
                        id="images"
                        name="images"
                        type="file"
                        multiple // Allow multiple files
                        onChange={handleImageUpload}
                        required
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />
                </div>

                {/* Category */}
                <div>
                    <Label htmlFor="category" value="Category ID" />
                    <TextInput
                        id="category"
                        name="category"
                        type="text"
                        placeholder="6751a3cc73c322ed38f1bc85"
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
                        placeholder="674c63e4d22731539d176006"
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
                        placeholder="2000"
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
                        placeholder="5"
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
                        placeholder="Seller ID"
                        value={formData.seller}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <Button type="submit" color="blue" disabled={loading}>
                    {loading ? "Creating..." : "Create Product"}
                </Button>
            </form>
        </div>
    );
};

export default CreateProduct;