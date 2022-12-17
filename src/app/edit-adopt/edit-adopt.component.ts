import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-adopt',
  templateUrl: './edit-adopt.component.html',
  styleUrls: ['./edit-adopt.component.css']
})
export class EditAdoptComponent implements OnInit {

  ecolor:String=""
  edescripcion:String=""
  eedad:String=""
  eimagen:String=""
  enombre:String=""
  eraza:String=""
  id:String=""
  constructor(public activatedRoute:ActivatedRoute, private dataAccess:MainServiceService, private toastr:ToastrService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
    });
    this.setinfo()
  }

  ngOnInit(): void {
  }

  editData(nombre:String, raza:String, color:String, edad:String, descripcion:String, imagen:String){
    this.dataAccess.updateAdoption(this.id, nombre,raza,color, edad, descripcion, imagen).subscribe(res=> {
      this.toastr.success('Up to date', 'Great!')
    }, error=>{
      this.toastr.error(error.statusText,'Something went wrong')
    })
  }

  setinfo(){
    this.dataAccess.getMascota(this.id).subscribe((res: any) => {
      console.log(res)
      this.ecolor=res.Color
      this.edescripcion=res.Descripcion
      this.eedad=res.Edad
      this.eimagen=res.Imagen
      this.enombre=res.Nombre
      this.eraza=res.Raza
    });
  }

}
