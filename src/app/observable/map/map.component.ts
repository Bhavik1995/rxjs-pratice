import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1?: Subscription;
  sub2?: Subscription;

  msg1?: string;
  msg2?: any;

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    // Ex - 01 

    const names = interval(1000);

    this.sub1 = names.pipe(
      map(data => 'Name ' + data)
    )
    .subscribe(res =>{
      // console.log(res)

      this.msg1 = res;
    })

    setTimeout(()=>{
      this.sub1?.unsubscribe()
    },5000)

      // Ex - 02
      
      
    this.sub2 = names.pipe(
      map(data => data + ' * ' + data + ' = ' + (data * data))
    )
    .subscribe(res =>{
      // console.log(res)

      this.msg2 = res;
    })

    setTimeout(()=>{
      this.sub2?.unsubscribe()
    },11000)


      //  Ex - 03 

      const members = from([
        {
          id: '1',
          name: 'Bhavik'
        },
        {
          id: '2',
          name: 'Aditya'
        },
        {
          id: '3',
          name: 'Prajwal'
        },
        {
          id: '4',
          name: 'Vishal'
        },
        {
          id: '5',
          name: 'Ashwin'
        },
      ])

      members.pipe(map(data=> data.name))
      .subscribe(res =>{
        console.log(res);

        this.designUtility.print(res, 'elContainer')
      })
  }

}
