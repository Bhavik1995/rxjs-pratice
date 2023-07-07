import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private designUtlity: DesignUtilityService) { }

  getData(data: any) {
    return of(data + ' Video Uploaded')
  }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']).pipe(delay(2000))

    // Ex - 01 | Map

    source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res => res.subscribe(res2 => {
        this.designUtlity.print(res2, 'elContainer')
      }))

    // Ex - 02 | MergeMap

    source.pipe(
      mergeMap(res => this.getData(res))
    )
      .subscribe(res => {
        this.designUtlity.print(res, 'elContainer2')
      })

    // Ex - 03 | ConcatMap

    source.pipe(
      concatMap(res => this.getData(res)),
    )
      .subscribe(res => {
        this.designUtlity.print(res, 'elContainer3')
      })
  }

}
