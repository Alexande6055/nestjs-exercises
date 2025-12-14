import { useEffect, useState } from "react"
import { ApiProducto } from "../services/productos"
import { FormCreateProduct } from "../components/FormCreateProduct"

export default function Home() {
    const [visibleForm, setVisibleForm] = useState<boolean>(false)
    const [productos, setProductos] = useState<{ id: number, nombre: string, cantidadDisponible: number }[]>([])
    const [refrescar, setRefrescar] = useState<boolean>(false)
    useEffect(() => {
        const peticionFetch = async () => {
            const productosApi = await ApiProducto.getProductos()
            setProductos(productosApi)
        }
        peticionFetch()
    }, [refrescar])

    return (

        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-linear-to-br from-indigo-500 to-purple-600">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
                Hello World!!
            </h1>

            <button
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                onClick={() => { setVisibleForm(true) }}
            >
                Crear Producto
            </button>
            <table className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-3 text-left">ID</th>
                        <th className="px-4 py-3 text-left">Nombre</th>
                        <th className="px-4 py-3 text-center">Cantidad Disponible</th>
                        <th className="px-4 py-3 text-center">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map((producto) => (
                        <tr
                            key={producto.id}
                            className="border-t hover:bg-gray-100 transition"
                        >
                            <td className="px-4 py-2">{producto.id}</td>
                            <td className="px-4 py-2">{producto.nombre}</td>
                            <td className="px-4 py-2 text-center">
                                {producto.cantidadDisponible}
                            </td>
                            <td className="px-4 py-2">
                                <div className="flex justify-center gap-3">
                                    <button className="text-blue-600 hover:underline">
                                        Editar
                                    </button>
                                    <button className="text-red-600 hover:underline">
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td >
                            <button className="bg-blue-600 shadow px-6 py-3 rounded-lg font-bold text-white hover:bg-blue-700" onClick={() => { setRefrescar(!refrescar) }}>Actualizar tabla</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            {
                visibleForm && (
                    <FormCreateProduct onClose={()=>{setVisibleForm(false)}}/>
                )
            }
        </div>


    )
}
