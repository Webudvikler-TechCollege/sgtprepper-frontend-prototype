import { request } from "../utils/http.js"
import { clearToken } from "../utils/token.js"

const url = `http://localhost:4000/api/cart`

// Henter alle produkter i brugerens indkøbskurv
export const getCartList = async () => {
    try {
        const data = await request(url)
        if(data) {
            return data
        }
        return []
    } catch (error) {
        console.error(error)
        return []
    }
}

// Tilføjer et produkt til indkøbskurven
export const addToCart = async (productId, quantity) => {
    try {
        const data = await request(`${url}`, 'POST', { 
            productId, quantity 
        })    
        return data
    } catch (error) {
        // Hvis session er udløbet, vis besked og log ud
        if (error.status === 401 || error.status === 403) {
            alert('Din session er udløbet. Log ind igen.')
            clearToken()
        } else {
            throw new Error('Request error on product list', { cause: error })
        }
    }
}

// Fjerner et produkt fra indkøbskurven
export const removeCartLine = async id => {
    console.log(id)
    
    try {
        const data = await request(`${url}/${id}`, 'DELETE')
        
        // Genindlæs siden hvis produktet blev fjernet
        if(data.message) {
            location.reload()
        }
             
    } catch (error) {
        console.error(error)
    }
}