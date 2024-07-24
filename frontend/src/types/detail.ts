export interface detailInterface{
    informacion:string,
    nombre:string,
    marca:string,
    precio:string,
    stock:number,
    unidad:number,
    fecha:string,
}

export interface objectInterface{
    price:number,
    image:string,
    idnumber:number,
    name:string,
    description:string,
    stock:number,
    date:string,
    condition:string,
}

export interface sumarCantidad {
    agregar:()=>void,
}

export interface eliminarCantidad {
    eliminar:() => void,
}

export interface agregarCarrito{
    guardar:()=> void
}