import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  data?: any;
  fetching?: boolean = false;
  status?: string = 'No Data';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchDetails(){
    this.fetching = true;
    this.status = 'Fetching Data..';
    this.http.get('https://dummyjson.com/products/1').pipe(
      // retry(4)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount)=>{
            if(retryCount >= 5){
              throw err
            }
            else{
              retryCount = retryCount + 1;
              console.log('retry',retryCount);
              this.status = 'Retrying Attempt #'+ retryCount;
              return retryCount
            }
        },0)
      ))
    )
      .subscribe(res =>{
        console.log(res);
        this.data = res;
        this.status = 'Data Fetched';
        this.fetching = false;
      },(err)=>{
        console.log(err);
        this.status = 'Problem Fetching Data';
        this.fetching = false;
      })
  }

}
