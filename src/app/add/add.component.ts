import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  code=localStorage.getItem('code')!
  date:String="12/12/2022"
  now = new Date().toLocaleString()
  name:string=""

  constructor(private service:MainServiceService, private toastr:ToastrService) { 
    this.service.getNombres().subscribe((res: any) => {
      console.log(res)
      this.name=res[0].name
    });
  }

  ngOnInit(): void {
  }

  adoption(color:String,description:String,name:String,breed:String,age:String,image:String){
    if(color=="" || description=="" || name=="" || breed=="" || age=="" || image==""){
      this.toastr.info('It seems like your missing some data','Hey!')
    }else{
      this.service.signAdoption(color,description,name,breed,age,image,this.code).subscribe(res=>{
        this.toastr.success('Your pet is online', 'Great!')
      }, error=>{
        this.toastr.error(error.statusText,'Something went wrong')
      })
    }
  }

  lost(color:String,description:String,name:String,breed:String,age:String,disapperance:String,image:String){

    if(color=="" || description=="" || name=="" || breed=="" || age=="" || image=="" || disapperance==""){
      this.toastr.info('It seems like your missing some data','Hey!')
    }else{
      this.service.signLost(color,description, name, breed, age, disapperance, image,this.code,this.now).subscribe(res=> {
        this.toastr.success('Your pet is online', 'Great!')
      }, error=>{
        this.toastr.error(error.statusText,'Something went wrong')
      })
    }  
  }

  displayNames(){
    this.toastr.info(this.name, 'Maybe you could try with...');
  }
}
