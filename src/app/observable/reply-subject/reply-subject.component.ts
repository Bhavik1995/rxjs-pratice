import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.scss']
})
export class ReplySubjectComponent implements OnInit {

  constructor(
    private designUtility: DesignUtilityService
  ) { }

  // List Data
  user1List = [
    'Angular 1',
    'Angular 2',
  ];
  user2List: string[] = [];
  user3List: string[] = [];

  // Subscribe Mode

  subscribeMode2?: boolean = false;
  subscribeMode3?: boolean = false;

  subcription2?: Subscription;
  subcription3?: Subscription;

  methodInterval?: boolean = false;
  intSubscription?: Subscription;


  ngOnInit() {

    this.designUtility.videEmit.subscribe(res => {
      this.user1List.push(res)
    })
  }

  onVideoAdd(video: any) {
    this.designUtility.videEmit.next(video);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subcription2?.unsubscribe();
    }
    else {
      this.subcription2 = this.designUtility.videEmit.subscribe(res => {
        this.user2List.push(res)
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subcription3?.unsubscribe();
    }
    else {
      this.subcription3 = this.designUtility.videEmit.subscribe(res => {
        this.user3List.push(res)
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod(){

    const broadCastVideo = interval(1000);

    if(!this.methodInterval){
      this.intSubscription = broadCastVideo.subscribe(res =>{
        this.designUtility.videEmit.next('Video ' + res);
      })
    }
    else{
      this.intSubscription?.unsubscribe()
    }
    this.methodInterval = !this.methodInterval;
  }

}
