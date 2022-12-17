import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-a',
  templateUrl: './user-a.component.html',
  styleUrls: ['./user-a.component.css']
})
export class UserAComponent implements OnInit {

  code=localStorage.getItem('code')!
  avanzar=false
  conteo:number = 0
  mascotasPerdidas : any[] = [];
  constructor(private service:MainServiceService, private router:Router, private toastr:ToastrService) {

    this.cargarMascotasAdopcion()
   }

  ngOnInit(): void {
  }

  cargarMascotasAdopcion(){
    this.service.getpetsbyusera(this.conteo,this.code).subscribe((res: any) => {
      console.log(res)
      if(res.length!=0){
        this.avanzar=true
        this.mascotasPerdidas=res
      }else{
        this.avanzar=false
      }
    });
  }

  siguiente(){
    console.log(this.conteo)
    if(this.avanzar){
      this.conteo+=5
      this.cargarMascotasAdopcion()
      this.conteo+=5
      this.cargarMascotasAdopcion()
      this.conteo-=5
      this.cargarMascotasAdopcion()
    }
  }
  anterior(){
    console.log(this.conteo)
    if(this.conteo>=5){
      this.conteo-=5
      this.cargarMascotasAdopcion()
    }
  }

  editar(id:String){
    this.router.navigate(['/editAdopt',id]);
  }

  eliminar(id:String){
    this.service.deleteAdoption(id).subscribe((res: any) => {
      console.log(res)
      this.toastr.success("Successfully deleted")
      window.location.reload();
    }, error=>{
      this.toastr.success("Something went wrong", "Error")
    });
    
  }

}
