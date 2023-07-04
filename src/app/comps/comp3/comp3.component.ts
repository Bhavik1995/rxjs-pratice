import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName?: string;
  constructor(private designUtility: DesignUtilityService) { 
    this.designUtility.userName.subscribe(res =>{
      this.userName = res;
    })
  }

  ngOnInit(): void {
  }

  onChange(uname: any){
    this.designUtility.userName.next(uname.value)
  }

}
