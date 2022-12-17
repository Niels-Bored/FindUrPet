import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-single-lost',
  templateUrl: './single-lost.component.html',
  styleUrls: ['./single-lost.component.css']
})
export class SingleLostComponent implements OnInit {

  color:String=""
  descripcion:String=""
  edad:String=""
  imagen:String=""
  nombre:String=""
  raza:String=""
  id:String=""
  correo:String=""
  code:string=""
  fecha:string=""

  constructor(public activatedRoute:ActivatedRoute, private dataAccess:MainServiceService, private router:Router) { 
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
    });
    this.setinfo()
  }

  ngOnInit(): void {
  }

  setinfo(){
    this.dataAccess.getLost(this.id).subscribe((res: any) => {
      console.log(res)
      this.color=res.Color
      this.descripcion=res.Descripcion
      this.edad=res.Edad
      this.imagen=res.Imagen
      this.nombre=res.Nombre
      this.raza=res.Raza
      this.code=res.Id_Usuario
      this.fecha=res.fecha_desaparicion
      this.setinfoUser()
    });
  }

  setinfoUser(){
    this.dataAccess.getuserbyid(this.code).subscribe((res: any) => {
      console.log(res)
      this.correo=res.correo
    });
  }

  regresar(){
    this.router.navigateByUrl('/home');
  }

}
