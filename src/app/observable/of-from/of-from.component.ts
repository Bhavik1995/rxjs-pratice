import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private designService: DesignUtilityService) { }

  ngOnInit(): void {

    // OF Example

    const Obs1 = of('Bhavik','Manoj','Sejpal');

    Obs1.subscribe(res =>{
      console.log(res); 

      this.designService.print(res);
    })

    const Obs2 = of({a:'Bhavik',b:'Manoj',c:'Sejpal'});

    Obs2.subscribe(res =>{
      console.log(res); 

      // this.designService.print(res);
    })
  }

}
