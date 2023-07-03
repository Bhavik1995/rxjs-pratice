import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  template: `
  ...
  <ngx-loading-bar></ngx-loading-bar>
  <button (click)="startLoading()">start</button>
  <button (click)="stopLoading()">stop</button>
`,
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput?: ElementRef;
  requestedData = null;


  @ViewChild('myInput2') myInput2?: ElementRef;
  requestedData2 = null;
  constructor(private loadingBar: LoadingBarService) { }

  ngOnInit(): void {

  }

  startLoading() {
    this.loadingBar.start();
  }

  stopLoading() {
    this.loadingBar.complete();
  }

  ngAfterViewInit(): void {

    // Ex - 01 Debounce Time 
    
    const searchTerm = fromEvent<any>(this.myInput?.nativeElement,'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    )

    searchTerm.subscribe(res =>{ 
      console.log(res)  
      this.requestedData = res;
      this.startLoading();

      setTimeout(()=>{
        this.requestedData = null;
        this.stopLoading();
      }, 2000)
    }) 

    // Ex - 02 Distinct UntilChanged

    const searchTerm2 = fromEvent<any>(this.myInput2?.nativeElement,'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res =>{ 
      console.log(res)  
      this.requestedData2 = res;
      this.startLoading();

      setTimeout(()=>{
        this.requestedData2 = null;
        this.stopLoading();
      }, 2000)
    }) 

  }

}
