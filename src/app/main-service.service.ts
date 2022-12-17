import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { identifierName } from '@angular/compiler';

export interface Response{
  ok:Boolean
}

export interface user{
  ok:Boolean;
  id:string;
}


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  //api:String ="http://192.168.100.93"
  api:String ="http://25.65.150.109"

  constructor(public httpClient: HttpClient) {}

  getNombres(){ //cambiar adopcion 
    return this.httpClient.get('http://api.generadordni.es/v2/profiles/person')
  }

  validateMail(correo:String){
    return this.httpClient.get('https://verifier.meetchopra.com/verify/'+correo+'?token=92928b756e623357b3bd80e8dc90deae2930ffd26e598b84867f3b788106dce911a819a49e3e3fe6834c36e844035116')
  }

  //mascota functions
  getMascotas(offset:Number){ //cambiar adopcion 
    return this.httpClient.get(this.api+':3000/mascotas/adopcion?offset='+offset)
  }

  getMascota(id:String){ //get
    return this.httpClient.get(this.api+':3000/mascota/adopcion/'+id)
  }

  signAdoption(color:String,description:String,name:String,breed:String,age:String,image:String,userid:String):Observable<Response>{
    const body={
      "color":color,
      "descripcion":description,
      "edad":age,
      "nombre":name,
      "raza":breed,
      "imagen":image,
      "id_usuario":userid,
    }
    return this.httpClient.put<Response>(this.api+':3000/mascota/adopcion', body)
  }

  getpetsbyusera(offset:Number,id:string){
    return this.httpClient.get(this.api+':3000/usuario/mascota/adopcion/'+id+'?offset='+offset)
  }

  updateAdoption(idMascota:String, nombre:String, raza:String, color:String, edad:String, descripcion:String, imagen:String):Observable<Response>{
    var id = localStorage.getItem('code')!
    const body = {
      "id":idMascota,
      "nombre":nombre,
      "raza":raza,
      "color":color,
      "edad":edad,
      "descripcion":descripcion,
      "imagen":imagen,
      "id_usuario":id
    }
    return this.httpClient.post<Response>(this.api+':3000/mascota/adopcion', body)
  }

  deleteAdoption(id:String){
    return this.httpClient.delete(this.api+':3000/mascota/adopcion/'+id)
  }

  //lost functions
  getLostPets(offset:Number){ //get
    return this.httpClient.get(this.api+':3000/mascotas/perdida?offset='+offset)
  }

  getLost(id:String){ //get
    return this.httpClient.get(this.api+':3000/mascota/perdida/'+id)
  }

  signLost(color:String,description:String,name:String,breed:String,age:String,disapperance:String,image:String,userid:String,date:String):Observable<Response>{
    const body={
      "color":color,
      "descripcion":description,
      "edad":age,
      "nombre":name,
      "raza":breed,
      "fecha_desaparicion":disapperance,
      "imagen":image,
      "id_usuario":userid,
      "fecha_publicacion":date
    }
    return this.httpClient.put<Response>(this.api+':3000/mascota/perdida', body)
  }

  getpetsbyuserl(offset:Number,id:string){
    return this.httpClient.get(this.api+':3000/usuario/mascota/perdida/'+id+'?offset='+offset)
  }

  updateLost(idMascota:String,nombre:String, raza:String, color:String, edad:String, descripcion:String, imagen:String, fecha_desaparicion:String, fecha_publicacion:String):Observable<Response>{
    var id = localStorage.getItem('code')!
    const body = {
      "id":idMascota,
      "nombre":nombre,
      "raza":raza,
      "color":color,
      "edad":edad,
      "descripcion":descripcion,
      "imagen":imagen,
      "id_usuario":id,
      "fecha_desaparicion":fecha_desaparicion,
      "fecha_publicacion":fecha_publicacion
    }
    return this.httpClient.post<Response>(this.api+':3000/mascota/perdida', body)
  }

  deleteLost(id:String){
    return this.httpClient.delete(this.api+':3000/mascota/perdida/'+id)
  }

  //State functions
  getstatebyid(id:string){
    return this.httpClient.get(this.api+':3000/usuario/estado/'+id)
  }

  //user functions
  getuserbyid(id:string){
    return this.httpClient.get(this.api+':3000/usuario/'+id)
  }

  createUser(nombre:String, apellidoPat:String, apellidoMat:String, calle:String, colonia:String, correo:String, estado:Number, numeroInterior:Number, password:String, telefono:String):Observable<Response>{
    const body = { //put
      "ap_mat": apellidoMat,
      "ap_pat": apellidoPat,
      "calle": calle,
      "colonia": colonia,
      "correo": correo,
      "estado": estado,
      "no_int": numeroInterior,
      "nombre": nombre,
      "password": password,
      "telefono": telefono
  }
    return this.httpClient.put<Response>(this.api+':3000/usuario', body)
  }

  updateUser(nombre:String, apellidoPat:String, apellidoMat:String, calle:String, colonia:String, correo:String, estado:Number, numeroInterior:Number, password:String, telefono:String):Observable<Response>{
    var id = localStorage.getItem('code')!
    const body = {
      "id":id,
      "ap_mat": apellidoMat,
      "ap_pat": apellidoPat,
      "calle": calle,
      "colonia": colonia,
      "correo": correo,
      "estado": estado,
      "no_int": numeroInterior,
      "nombre": nombre,
      "password": password,
      "telefono": telefono
  }
    return this.httpClient.post<Response>(this.api+':3000/usuario', body)
  }
  
  login(email:String,password:String):Observable<user>{ //post
    const body = {
        "nombre": email,
        "password": password
    }
    return this.httpClient.post<user>(this.api+':3000/usuario/login/', body) 
  }

}


