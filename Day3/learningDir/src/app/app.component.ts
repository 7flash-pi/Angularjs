import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 showSecret=false;
 logDetail : Number[] = [];

 onToggle=()=>{
   this.showSecret = !this.showSecret;
   this.logDetail.push(this.logDetail.length+1);  
 }
}
