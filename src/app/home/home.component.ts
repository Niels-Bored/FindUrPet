import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  avanzar=false
  conteo:number = 0
  mascotasPerdidas : any[] = [];


  constructor(private service:MainServiceService, private router:Router) { 
    this.cargarMascotasPerdidas()
  }


  ngOnInit(): void { 
  }


  cargarMascotasPerdidas(){
    this.service.getLostPets(this.conteo).subscribe((res: any) => {
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

  verMascota(id:String){
    this.router.navigate(['/singleLost',id]);
  }
}
