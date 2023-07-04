import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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
