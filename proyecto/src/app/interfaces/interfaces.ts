
export interface slider{
    img : string,
    title : string,
    descripcion? : string,
    link? : string
}

export interface Datos{
    dato         : string,
    imagen       : string,
    nombre       : string,
    tipos?       : Array<string>,
    nota?        : number,
    pagos?       : Pagos,
    descripcion? : string,
    oferta?      : number,
    ciudad?      : string,
    pais?        : string,
    url          : string,
  }

  export interface Pagos{
    yums : boolean,
    pay  : boolean
  }


export interface Enlace{
    href : string,
    title : string,
    target? : boolean
}