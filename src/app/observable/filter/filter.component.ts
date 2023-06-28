import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {
      id: 1,
      name: 'Bhavik',
      gender: 'Male'
    },
    {
      id: 2,
      name: 'Vishal',
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Prajwal',
      gender: 'Male'
    },
    {
      id: 4,
      name: 'Aditya',
      gender: 'Male'
    },
    {
      id: 5,
      name: 'Ashwin',
      gender: 'Male'
    },
    {
      id: 5,
      name: 'Vidhi',
      gender: 'Female'
    },
    {
      id: 6,
      name: 'Shweta',
      gender: 'Female'
    }
  ]

  data?: any;
  data2?: any;
  data3?: any;

  constructor() { }

  ngOnInit(): void {

    const source = from(this.dataArr)

    // Ex - 01 - Filter by length

    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    ).subscribe(res => {
      //  

      this.data = res;
    })

    // Ex - 02 - Filter by gender

    source.pipe(
      filter(member=> member.gender == 'Female'),
      toArray()
    ).subscribe(res => {
      // console.log(res);

      this.data2 = res;
    })

    // Ex - 03 - Length Item

    source.pipe(
      filter(member=> member.id <= 4),
      toArray()
    ).subscribe(res => {
      console.log(res);

      this.data3 = res;
    })
  }

}
