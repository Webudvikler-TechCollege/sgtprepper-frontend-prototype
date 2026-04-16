import { request } from "../utils/http.js"

const url = `http://localhost:4000/api/categories`

// Henter liste af alle produktkategorier fra databasen
export const getCategoryList = async () => {
    try {
        const data = await request(url)
        return data
    } catch (error) {
        throw new Error('Request error on category list', { cause: error })
    }
}