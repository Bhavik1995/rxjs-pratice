import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    // Ex - 01 (Manual)

    const cusObs1 = new Observable((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('Angular');
      }, 2000);

      setTimeout(() => {
        observer.next('React');
        
      }, 3000);

      setTimeout(() => {
        observer.next('TypeScript');
        observer.complete()
      }, 4000);
     
    })

    cusObs1.subscribe(res =>{
      console.log(res);

      this.designUtility.print(res,'elContainer')
    })
  }

}
