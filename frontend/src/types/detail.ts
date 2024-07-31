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
    alt:string,
    position:number
}

export interface objectInterface{
    price:number,
    mainImage:string,
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

export interface actualizarImagen{
    actualizar:(position:number)=> void
}

export interface botonActivo{
    activar:(posicion:number)=>void
}