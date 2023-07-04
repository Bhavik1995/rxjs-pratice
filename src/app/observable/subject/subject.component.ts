import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  userName?: string;

  constructor(private designUtlity: DesignUtilityService) {
    this.designUtlity.userName.subscribe(res =>{  
      this.userName = res;
    })
   }

  ngOnInit() {
    this.designUtlity.exclusive.next(true);
  }

  ngOnDestroy(){
    this.designUtlity.exclusive.next(false);
  }
}
