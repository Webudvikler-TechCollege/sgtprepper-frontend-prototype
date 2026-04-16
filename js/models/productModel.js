import { request } from "../utils/http.js"

const url = `http://localhost:4000/api/products`

// Henter liste af alle produkter ud fra kategori
export const getProductList = async (category) => {
    try {
        const data = await request(`${url}/${category}`)
        return data
    } catch (error) {
        throw new Error('Request error on category list', { cause: error })
    }
}

// Henter liste af alle produkter ud fra kategori
export const getProduct = async (product) => {
    try {
        const data = await request(`${url}/bySlug/${product}`)        
        return data
    } catch (error) {
        throw new Error('Request error on category details', { cause: error })
    }
}