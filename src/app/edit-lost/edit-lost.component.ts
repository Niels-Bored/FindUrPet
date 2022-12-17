import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-lost',
  templateUrl: './edit-lost.component.html',
  styleUrls: ['./edit-lost.component.css']
})
export class EditLostComponent implements OnInit {

  ecolor:String=""
  edescripcion:String=""
  eedad:String=""
  eimagen:String=""
  enombre:String=""
  eraza:String=""
  efecha:String=""
  efechaPublicacion:String=""
  id:String=""
  constructor(public activatedRoute:ActivatedRoute, private dataAccess:MainServiceService, private toastr:ToastrService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
    });
    this.setinfo()
  }

  ngOnInit(): void {
  }

  editData(nombre:String, raza:String, color:String, edad:String, descripcion:String, imagen:String,fecha_desaparicion:String){
    this.dataAccess.updateLost(this.id, nombre,raza,color, edad, descripcion, imagen,fecha_desaparicion, this.efechaPublicacion).subscribe(res=> {
      this.toastr.success('Up to date', 'Great!')
    }, error=>{
      this.toastr.error(error.statusText,'Something went wrong')
    })
  }
  setinfo(){
    this.dataAccess.getLost(this.id).subscribe((res: any) => {
      console.log(res)
      this.ecolor=res.Color
      this.edescripcion=res.Descripcion
      this.eedad=res.edad
      this.eimagen=res.Imagen
      this.enombre=res.Nombre
      this.eraza=res.Raza
      this.efecha=res.fecha_desaparicion
      this.efechaPublicacion=res.fecha_publicacion
    });
  }

}
