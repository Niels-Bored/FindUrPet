import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  avanzar=false
  conteo:number = 0
  mascotasAdopcion : any[] = [];

  constructor(private service:MainServiceService, private router:Router) { 
    this.cargarMascotasAdopcion()
  }


  ngOnInit(): void { 
  }

  verMascota(id:String){
    this.router.navigate(['/single',id]);
  }

  cargarMascotasAdopcion(){
    this.service.getMascotas(this.conteo).subscribe((res: any) => {
      console.log(res)
      if(res.length!=0){
        this.avanzar=true
        this.mascotasAdopcion=res
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
    }
  }
  anterior(){
    console.log(this.conteo)
    if(this.conteo>=5){
      this.conteo-=5
      this.cargarMascotasAdopcion()
    }
  }
}
