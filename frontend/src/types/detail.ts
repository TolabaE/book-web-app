export interface detailInterface{
    informacion:string,
    nombre:string,
    marca:string,
    precio:string,
    stock:number,
    unidad:number,
    fecha:string,
}

type objImg = {
    link:string,
    alt:string
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
    list_image:Array<objImg>
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