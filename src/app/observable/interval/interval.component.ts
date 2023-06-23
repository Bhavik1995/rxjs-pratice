import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMessage?: string;

  videoSubcription?: Subscription;
  constructor(private designUtlity: DesignUtilityService) { }

  ngOnInit(): void {

    const broadCastVideo = timer(5000,1000);

   this.videoSubcription = broadCastVideo.subscribe(res=>{
      console.log(res);

      this.obsMessage = 'Video '+res;

      this.designUtlity.print(this.obsMessage)
      
      if(res >= 5){ 
        this.videoSubcription?.unsubscribe(); 
      }
    });
  }

}
