import { Component, OnInit } from '@angular/core';
import { DataService } from './dataService';
import { Data } from './data';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

dataset:Data[]=(new DataService()).getDataset();

// showImageText:string="Show Image";
// toggleImage:boolean=false;

/**
 * id:string;
    title:string;
    subtitle:string;
    text:string;
    imgUrl:string;
    toggleImage:boolean;
 */

  constructor() { }

  ngOnInit() {
  }
  toggle(id:string) {
    this.dataset.forEach(item=>{
      if (item.id == id){
        //item.toggleImage = !item.toggleImage;
        if (item.showImageText=="Show Image") {
          item.showImageText = "Show Text";
          item.toggleImage = true;
        } else{
          item.showImageText = "Show Image";
          item.toggleImage = false;
        }
      }
    })
    /*
    if (this.showImageText=="Show Image") {
      this.showImageText = "Show Text";
      this.toggleImage = true;
    } else{
      this.showImageText = "Show Image";
      this.toggleImage = false;
    }
      */
  }
}
