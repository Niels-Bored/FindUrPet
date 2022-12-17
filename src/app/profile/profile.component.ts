import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName:String=""
  lastname:String=""
  lastname2:String=""
  email:String=""
  state:String=""
  id:string=""
  code=localStorage.getItem('code')!
  constructor(private service:MainServiceService, private router:Router, private toastr:ToastrService) { 
    this.setinfo()
    
  }

  ngOnInit(): void {

    


  }


  close(){
    localStorage.setItem('code','')
    this.router.navigateByUrl('/home');
    this.toastr.info('Session closed', 'Hey!')
  }

  setinfo(){
    this.service.getuserbyid(this.code).subscribe((res: any) => {
      console.log(res)
      this.userName=res.nombre
      this.lastname=res.ap_pat
      this.lastname2=res.ap_mat
      this.email=res.correo
      this.id=res.estado
      console.log(this.userName)
      this.setstate()
    });
  }

  setstate(){
    this.service.getstatebyid(this.id).subscribe((res:any)=>{
      console.log(res)
      this.state=res.Nombre
    })
  }

  editInfo(){
    
  }

}
