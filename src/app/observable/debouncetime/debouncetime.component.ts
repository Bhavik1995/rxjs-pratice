import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, fromEvent, map } from 'rxjs';

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
  }

}
