import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    const sourceTech = interval(5000).pipe(map(v=> 'Tech Videos ' + (v+1)),take(5));
    const sourceComedy = interval(4500).pipe(map(v=> 'Comedy Videos ' + (v+1)),take(3));
    const sourceNews = interval(3000).pipe(map(v=> 'News Videos ' + (v+1)),take(4));

    const finalData = merge(sourceTech,sourceComedy,sourceNews)

    finalData.subscribe(res =>{
      console.log(res)

      this.designUtility.print(res,'elContainer');
    })
  }
}
