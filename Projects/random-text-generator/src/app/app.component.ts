import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inputNumber:number;
  Randomtext:string[];
  constructor(private textService:TextService){}

  ngOnInit(): void {
    this.Randomtext=this.textService.randomText;
  }
  handleSubmit=()=>{
    let amount=this.inputNumber;
    if(this.inputNumber<=0){
      amount=1;
    }
    if(this.inputNumber>8)
    {
      amount=8;
    }

        if(Array.isArray(this.Randomtext)){
    this.Randomtext=this.Randomtext.slice(0,amount);

         }
        else {
          console.log('Randomtext is not an array');
        }
}

}
