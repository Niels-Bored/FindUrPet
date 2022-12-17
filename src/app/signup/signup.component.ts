import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainServiceService } from '../main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  register:boolean=false
  constructor(public dataAccess:MainServiceService, public router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  registrarUsuario(nombre:String, apellidoPat:string,apellidoMat:String,calle:String, colonia:String, correo:String, estado:String, numeroInterior:String, password:String, telefono:String){
    if(nombre=="" || apellidoPat =="" ||apellidoMat=="" ||calle=="" ||colonia=="" || correo=="" || estado=="" || numeroInterior=="" ||password=="" ||telefono==""){
      this.toastr.info('It seems like your missing some data','Hey!')
    }else{
      this.dataAccess.validateMail(correo).subscribe((res: any)=> {
        console.log(res)
        this.register=res.status
        console.log(this.register)
        if(this.register){
          this.dataAccess.createUser(nombre, apellidoPat, apellidoMat, calle, colonia, correo, Number(estado), Number(numeroInterior), password, telefono).subscribe(res=> {
            this.toastr.success('Now you are register', 'Great!')
          }, error=>{
            this.toastr.error(error.statusText,'Something went wrong')
          })
          this.router.navigateByUrl('/login')
        }else{
          this.toastr.error('E-mail does not exist', 'Error')
        }
      })
      
    }  
  }
}
