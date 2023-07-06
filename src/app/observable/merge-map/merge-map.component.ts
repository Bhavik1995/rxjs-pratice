import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  getData(data: any){
    return of(data + ' Video Uploaded') 
  } 

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News']);

  //  Ex - 01 | Map

  source.pipe(
    map(res => this.getData(res))
  ).subscribe(res=> res.subscribe(res2 =>{
    console.log('Map => '+res2);

    this.designUtility.print(res2,'elContainer');
  }))

    //  Ex - 02 | Map + MergeAll

    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe(res=> {
      console.log('Map + MergeAll => ',res);
      this.designUtility.print(res,'elContainer2');
    })


    //  Ex - 03 | MergeMap

    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res=> {
      console.log('MergeMap => ',res);
      this.designUtility.print(res,'elContainer3');
    })
    }
  }
