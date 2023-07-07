import { Component, OnInit } from '@angular/core';
import { from, map, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  getData(data: any) {
    return of(data + ' Video Uploaded')
  }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    //  Ex - 01 | Map

    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      console.log('Map => ' + res2);

      this.designUtility.print(res2, 'elContainer');
    }))

    //  Ex - 02 | Map + SwitchAll

    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    ).subscribe(res => {
      console.log('Map + SwitchAll => ', res);
      this.designUtility.print(res, 'elContainer2');
    })


    //  Ex - 03 | SwitchMap

    source.pipe(
      switchMap(res => this.getData(res)),
    ).subscribe(res => {
      console.log('SwitchMap => ', res);
      this.designUtility.print(res, 'elContainer3');
    })
  }

}
