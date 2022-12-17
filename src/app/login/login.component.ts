import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MainServiceService } from '../main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router,private service:MainServiceService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSave(){
    this.router.navigateByUrl('/signup');
  }

  register(email:String,password:String){
    this.service.login(email,password).subscribe(res=> {
      console.log(res)
      if(res.ok){
        this.toastr.success('Now you are logged', 'Great!')
        localStorage.setItem('code',res.id)
        this.router.navigateByUrl('/profile');
      }
    }, error=>{
      this.toastr.error(error.statusText,'Something went wrong')
    })
      
  }

}
