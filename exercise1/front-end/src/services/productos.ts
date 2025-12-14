import axios from "axios"
import { BASE_URL_API } from "../utils/constantes"

export const ApiProducto = {
    async getProductos() {
        const response = await axios.get(BASE_URL_API + "/productos");
        const productos = response.data;
        console.log(productos)
        return productos;
    }
}