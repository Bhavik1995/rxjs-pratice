import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm?: NgForm

  constructor() { }

  ngAfterViewInit(): void {
    
    const formValue= this.searchForm?.valueChanges;
    formValue?.pipe(
      map(data=> data),
      debounceTime(500),
      distinctUntilChanged() 
     )
     .subscribe(res =>{
       console.log(res)
     })


  }

}
