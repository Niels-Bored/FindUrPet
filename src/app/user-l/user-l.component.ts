import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-l',
  templateUrl: './user-l.component.html',
  styleUrls: ['./user-l.component.css']
})
export class UserLComponent implements OnInit {
  code=localStorage.getItem('code')!
  avanzar=false
  conteo:number = 0
  mascotasPerdidas : any[] = [];
  constructor(private service:MainServiceService, private router:Router, private toastr:ToastrService) {

    this.cargarMascotasPerdidas()
   }

  ngOnInit(): void {
  }

  cargarMascotasPerdidas(){
    this.service.getpetsbyuserl(this.conteo,this.code).subscribe((res: any) => {
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
      this.cargarMascotasPerdidas()
      this.conteo+=5
      this.cargarMascotasPerdidas()
      this.conteo-=5
      this.cargarMascotasPerdidas()
    }
  }
  anterior(){
    console.log(this.conteo)
    if(this.conteo>=5){
      this.conteo-=5
      this.cargarMascotasPerdidas()
    }
  }

  editar(id:String){
    this.router.navigate(['/editLost',id]);
  }

  eliminar(id:String){
    //Poner un alert que pregunté si está seguro de hacerlo
    this.service.deleteLost(id).subscribe((res: any) => {
      console.log(res)
      this.toastr.success("Successfully deleted")
      window.location.reload();
    }, error=>{
      this.toastr.success("Something went wrong", "Error")
    });
  }
}
