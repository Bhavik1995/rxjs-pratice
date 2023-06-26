import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {


  obsMsg? :any;
  constructor(private designService: DesignUtilityService) { }

  ngOnInit(): void {

    // OF Example

    const Obs1 = of('Bhavik','Manoj','Sejpal');

    Obs1.subscribe(res =>{
      console.log(res); 

      this.designService.print(res,'elContainer');
    })

    const Obs2 = of({a:'Bhavik',b:'Manoj',c:'Sejpal'});

    Obs2.subscribe(res =>{
      console.log(res); 

      this.obsMsg = res;
    })

    // FROM Example - Array

    const Obs3 = from(['Bhavik','Manoj','Sejpal']);

    Obs3.subscribe(res =>{
      console.log(res); 

      this.designService.print(res,'elContainer3');
    })

    // FROM Example - Promise

    const promise = new Promise(resolve =>{
      setTimeout(() => {
          resolve('Promise Resolved');
      }, 3000);
    })

    const Obs4 = from(promise);

    Obs4.subscribe(res =>{
      console.log(res); 

      this.designService.print(res,'elContainer4');
    })

    // FROM Example - Strring

    const Obs5 = from('Welcome to Hello');

    Obs5.subscribe(res =>{
      console.log(res); 

      this.designService.print(res,'elContainer5');
    })

  }

}
