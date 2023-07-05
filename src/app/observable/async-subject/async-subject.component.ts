import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit?: any;

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit() {

    this.designUtility.asyncVideoEmit.subscribe(res =>{
        this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video: any) {
    console.log(video)
    this.designUtility.asyncVideoEmit.next(video)
  }

  onComplete(){
    this.designUtility.asyncVideoEmit.complete();
  }

}
