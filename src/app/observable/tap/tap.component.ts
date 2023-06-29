import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  sub?: Subscription;
  sub2?: Subscription;
  myColor?: string;

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const source = interval(1500);

    // Ex - 01
    const arr = ['Bhavik', 'Vishal', 'Aditya', 'Prajwal', 'Ashwin'];
    this.sub = source.pipe(
      tap(res => {
        if (res == 5) {
          this.sub?.unsubscribe();
        }
      }),
      map(res => arr[res])
    )
      .subscribe(res => {
        // console.log(res);
        this.designUtility.print(res, 'elContainer')
      })

    // Ex - 02
    const colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow'];
    this.sub2 = source.pipe(
      tap(res => {

        this.myColor = colors[res];
        if (res == 5) {
          this.sub2?.unsubscribe();
        }
      }),
      map(res => colors[res])
    )
      .subscribe(res => {
        console.log(res);
        this.designUtility.print(res, 'elContainer2')
      })
  }
}
