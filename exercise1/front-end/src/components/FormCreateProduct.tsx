import React, { useState, type FormEvent } from "react"
import { ApiProducto } from "../services/productos";

export interface FormDataCreate {
    nombre: string;
    cantidadDisponible: number;
}
export function FormCreateProduct() {
    const [formData, setFormData] = useState<FormDataCreate>({
        nombre: "",
        cantidadDisponible: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        const parsedValue = type === 'number' && value !== '' ?
            parseInt(value, 10) :
            value;
        setFormData(data => (
            {
                ...data,
                [name]: parsedValue
            }
        ))
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault() // <-- ESTO es lo que evita la recarga
        const fetchCreate = async () => {
            const peticion = await ApiProducto.createProduct(formData);
        }
        fetchCreate();
    }
    return (
        <div className="bg-white flex flex-col" >
            <h1>
                Formulario para crear un Producto
            </h1>
            <form className="flex " onSubmit={handleSubmit}>
                <label>Nombre del Producto</label>
                <input type="text" name="nombre" placeholder="Arroz" value={formData.nombre} onChange={handleChange} />
                <label>Cantidad disponible del Producto</label>
                <input type="number" name="cantidadDisponible" placeholder="8" value={formData.cantidadDisponible} onChange={handleChange} />
                <button type="submit" className="bg-blue-600 text-white font-semibold hover:bg-blue-720 transition">Guardar</button>
            </form>
        </div>
    )
}