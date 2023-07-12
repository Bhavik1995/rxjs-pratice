import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/interfaces/search.interface';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.scss']
})
export class SwitchMapSearchComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm
  
  constructor(private searchService: SearchServiceService) { }

  searchResults: Search;

  ngAfterViewInit(): void {
    
    // this.searchService.getData('Bret').subscribe(res=>{
    //   console.log(res)
    // })
    const formValue= this.searchForm.valueChanges;
    formValue?.pipe(
     
      map(data=> data.seachTerm),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.searchService.getData(data))
     )
     .subscribe(res =>{
       console.log(res)

       this.searchResults = res;
     })


  }

}
