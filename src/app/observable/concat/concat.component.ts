import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    const sourceTech = interval(1000).pipe(map(v=> 'Tech Videos ' + (v+1)),take(5));
    const sourceComedy = interval(1000).pipe(map(v=> 'Comedy Videos ' + (v+1)),take(3));
    const sourceNews = interval(1000).pipe(map(v=> 'News Videos ' + (v+1)),take(4));

    const finalData = concat(sourceTech,sourceComedy,sourceNews)

    finalData.subscribe(res =>{
      console.log(res)

      this.designUtility.print(res,'elContainer');
    })
  }

}
