import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.css']
})
export class ProfilePanelComponent implements OnInit {

  uuserName:String=""
  ulastname:String=""
  ulastname2:String=""
  uemail:String="algo"
  ustreet:String=""
  usuburb:String=""
  ustreetnumber:String=""
  uphonenumber:String=""
  upassword:String=""
  ustate:String=""
  code=localStorage.getItem('code')!

  constructor(private dataAccess:MainServiceService, private router:Router, private toastr:ToastrService) { 
    this.setinfo()
  }

  ngOnInit(): void {
  }

  editData(name:String, lastname1:String, lastname2:String, street:String, suburb:String, streetnumber:String, phonenumber:String, email:String, password:String, state:String){
    
    this.dataAccess.updateUser(name, lastname1, lastname2, street, suburb, email, Number(state), Number(streetnumber), password, phonenumber).subscribe(res=> {
      this.toastr.success('Up to date', 'Great!')
    }, error=>{
      this.toastr.error(error.statusText,'Something went wrong')
    })
    this.router.navigateByUrl('/home');

  }



  setinfo(){
    this.dataAccess.getuserbyid(this.code).subscribe((res: any) => {
      console.log(res)
      this.uuserName=res.nombre
      this.ulastname=res.ap_pat
      this.ulastname2=res.ap_mat
      this.uemail=res.correo
      this.upassword=res.password
      this.ustreet=res.calle
      this.usuburb=res.colonia
      this.ustreetnumber=res.no_int
      this.uphonenumber=res.telefono
      this.ustate=res.estado
    });
  }
}
