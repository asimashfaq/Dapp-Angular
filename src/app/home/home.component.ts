import {Component,OnInit} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public balance:number;
  public amount:number;
  public tx:string;
  constructor(
      private _homeService:HomeService
  ){

  }
  ngOnInit(){
    this._homeService.getBalance()
        .subscribe((data:any)=>{
          this.balance = data.balance;
        })
    
  }
  addBalance(){
    if(this.amount>0){
      this._homeService.addBalance(this.amount)
          .subscribe((data:any)=>{
            this.balance = data.balance;
            this.tx = data.tx;
          })
    }
    else {
      alert("Invalid Input")
    }
  }
}
