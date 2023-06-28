import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {


  arrayData?: any;
  arrayData2?: any;
  constructor() { }

  users = [
    {
      name: 'Bhavik',
      skills: 'Angular',
      job:{
        title: 'Front-End Developer',
        exp: '1 year'
      }
    },
    {
      name: 'Vishal',
      skills: 'JavaScript',
      job:{
        title: 'JavaScript Developer',
        exp: '3 year'
      }
    },
    {
      name: 'Prajwal',
      skills: 'React',
      job:{
        title: 'React Developer',
        exp: '2 year'
      }
    },
    {
      name: 'Aditya',
      skills: 'TypeScript',
      job:{
        title: 'MERN Developer',
        exp: '2.5 year'
      }
    },
    {
      name: 'Ashwin',
      skills: 'HTML',
      job:{
        title: 'HTML Developer',
        exp: '1 year'
      }
    }
  ]

  ngOnInit(): void {


    // Ex- 01

    from(this.users).pipe
      (
        pluck('name'),
        toArray()
      )
      .subscribe(res => {
        console.log(res)

        this.arrayData = res;
      })

    // Ex - 02
    
    from(this.users).pipe
      (
        pluck('job','title'),
        toArray()
      )
      .subscribe(res => {
        console.log(res)

        this.arrayData2 = res;
      })
  }

}
