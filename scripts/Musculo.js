class Musculo{
    constructor(nombre, descripcion, imagen){
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._imagen = imagen;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get descripcion(){
        return this._descripcion
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get imagen(){
        return this._imagen
    }
    set imagen(imagen){
        this._imagen = imagen;
    }
}

class videoEjercicio{
    constructor(nombre, video){
        this._nombre = nombre;
        this._video = video;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get video(){
        return this._video
    }
    set video(video){
        this._video = video;
    }
}