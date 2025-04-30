import Receta from "#models/receta";

export class RecetaService {
  // Your code here
  async all() {
    return await  Receta.all();       
}

async getByAvalaible(){
    return await  Receta.query().orderBy('nombre',"asc");
}

async getById(id: any) { 
    const res = await  Receta.find(id);
    return res;
}

async create( data:  Receta){
    return await  Receta.create(data);
}

async destroy(id: any) {
    const  post = await  Receta.find(id) 
    return await  post!.delete()  
}

async update(id: any, body:  Receta) { 
    const  post = await  Receta.find(id)

     post!.nombre = body.nombre
     post!.temperatura = body.temperatura
     post!.tiempo = body.tiempo
     post!.conPicada = body.conPicada
     post!.picada = body.picada
     post!.observacion = body.observacion
     post!.cantidad = body.cantidad
     post!.ingredientes = body.ingredientes
     return await  post!.save()  
}
}