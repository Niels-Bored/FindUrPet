import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speech-synthesis';
  code=localStorage.getItem('code')!
  tab:String=""
  site:String=""
  show:String=""
  

  constructor() { 
    this.setTab()
  }

  setTab(){
    if(this.code==""){
      this.tab="Login"
      this.site="/login"
      this.show=""
    }
    else{
      this.tab="Profile"
      this.site="/profile"
      this.show="MyPets"
    } 
  }
}
