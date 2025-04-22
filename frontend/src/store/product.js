import {create} from 'zustand';

export const useProductStore = create((set) => ({
    product : [],
    setProducts : (products) => set({product : products}),
    createProduct : async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success : false, message : "Please fill all the fields"}
        }
        
        try{
            const res = await fetch("/api/product", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(newProduct)
            });

                // Check if response is OK
            if (!res.ok) {
                const errorText = await res.text(); // Get raw response for debugging
                return { success: false, message: errorText || "Failed to create product" };
            }

            
            // Try parsing JSON
            let data = {};
            try {
                data = await res.json();
            } catch (jsonError) {
                return { success: false, message: "Response was not valid JSON" };
            }

            set((state) => ({product : [...state.product, data.data]}));
            return {success : true, message : "Product created successfuly "}

        }
        catch(error){
            return { success: false, message: "Network error or server not responding" };
        }
    }
}));