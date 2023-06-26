import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Ex - 01 (Manual)

    const cusObs1 = new Observable((observer: Observer<string>) => {
      observer.next('Data Emit - 1');
    })

    cusObs1.subscribe(res =>{
      console.log(res)
    })
  }

}
