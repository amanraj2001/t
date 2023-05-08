import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { data } from '../model/data';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  arr:Array<data>=[]
  newarr:Array<data>=[]
  obj:Array<data>=[]
    constructor(private demo:DataService) {

    }
    ngOnInit(): void {

      this.demo.getdata().subscribe(p=>{
        console.log(p);
        this.arr=p
        console.log(this.arr);

      })
    }

    show(i:number){
      console.log(i);
      this.obj=this.arr.filter(x=>x.Imageid==i+1)
      console.log(this.obj);

    }

    del(i:number){
      console.log(i);
      this.newarr.push(this.arr[i])
      console.log(this.newarr);

      this.arr.splice(i,1)
    }
}
