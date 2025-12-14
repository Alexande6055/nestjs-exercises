import axios from "axios"
import { BASE_URL_API } from "../utils/constantes"
import type { FormDataCreate } from "../components/FormCreateProduct";

export const ApiProducto = {
    async getProductos() {
        const response = await axios.get(BASE_URL_API + "/productos");
        const productos = response.data;
        console.log(productos)
        return productos;
    },
    async createProduct(data: FormDataCreate) {
        const response = await axios.post(BASE_URL_API + "/productos", data)
        const productoCreado = response.data;
        console.log(productoCreado)
        return productoCreado;

    }
}