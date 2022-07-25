import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';
 
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private _jsonService:JsonService) { }
    str:any={};
   jsonObject:any="";
  ngOnInit(): void {
    var index=0;
  }
   putDetails(str:any){
    console.log(str);
    this._jsonService.getDetail(this.str).subscribe(
      res => {
        console.log(res);
        this.jsonObject =res;
        }           
      ,
      err => {
        alert("JSON Not Found");
      }
    );
   }

}
