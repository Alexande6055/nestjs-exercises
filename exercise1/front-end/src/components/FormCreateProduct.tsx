import React, { useState, type FormEvent } from "react"
import { ApiProducto } from "../services/productos"

export interface FormDataCreate {
    nombre: string
    cantidadDisponible: number
}

export function FormCreateProduct({ onClose }: { onClose: () => void }) {
    const [formData, setFormData] = useState<FormDataCreate>({
        nombre: "",
        cantidadDisponible: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target

        const parsedValue =
            type === "number" && value !== "" ? Number(value) : value

        setFormData((data) => ({
            ...data,
            [name]: parsedValue,
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await ApiProducto.createProduct(formData)
        onClose()
    }

    return (
        /* OVERLAY */
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            {/* MODAL */}
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        Crear Producto
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            Nombre del producto
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Arroz"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                            Cantidad disponible
                        </label>
                        <input
                            type="number"
                            name="cantidadDisponible"
                            placeholder="8"
                            value={formData.cantidadDisponible}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Guardar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
