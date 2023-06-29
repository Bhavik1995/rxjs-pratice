import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  randomName = ['Bhavik', 'Vishal', 'Aditya', 'Prajwal', 'Ashwin'];

  ngOnInit(): void {

    const randomSource = from(this.randomName)

    // Ex - 01 Take
    randomSource.pipe
      (
        take(4)
      )
      .subscribe(res => {
        // console.log(res);

        this.designUtility.print(res, 'elContainer')
      })

    // Ex - 02 TakeLast
    randomSource.pipe
      (
        takeLast(3)
      )
      .subscribe(res => {
        // console.log(res);

        this.designUtility.print(res, 'elContainer2')
      })


    // Ex - 02 TakeUntil

   
    const source = interval(1000);
    let condition = timer(5000);
    let condition2 = fromEvent(document,'click');

    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    )
    .subscribe(res =>{
      console.log(res);

      this.designUtility.print(res, 'elContainer3')
    })
  }

}
