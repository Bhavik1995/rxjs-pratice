import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus?: string;
  techStatus2?: string;
  sub2?: Subscription;
  names: any;
  nameStatus?: any;
  constructor(private designUtility: DesignUtilityService) { }


  ngOnInit(): void {

    // Ex - 01 (Manual)

    const cusObs1 = new Observable((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('React');
        // observer.error(new Error('Error'));
      }, 2000);

      setTimeout(() => {
        observer.next('TypeScript');
        observer.complete();
      }, 3000);
     
    })

    cusObs1.subscribe(res =>{
      // console.log(res);

      this.designUtility.print(res,'elContainer');
    },
    (err)=>{
      this.techStatus = 'Error';
    },()=>{
      this.techStatus = 'Completed';
    })


    // Ex - 02 (Custom Observables)

    const techArray = ['Angular', 'React', 'TypeScript', 'HTML', 'CSS'];
    const cusObs2 = new Observable((observer: Observer<string>) => {

      let count = 0;
        setInterval(()=>{
        observer.next(techArray[count]);
        if(count >= 2){
          observer.error('Error')
        }
        if(count>=5){
          observer.complete()
        }
        count++;
      },1000)

    })

    this.sub2 = cusObs2.subscribe(res =>{ 
      // console.log('Custom =>',res);

      this.designUtility.print(res,'elContainer2');
    },(err)=>{
      this.techStatus2 = 'Error';
    },()=>{
      this.techStatus2 = 'Completed';
    })

    // Ex - 03 (Random Names)

    const nameArray = ['Bhavik', 'Manoj', 'Sejpal','John', 'Alex', 'Robert'];
    const cusObs3 = new Observable((observer: Observer<string>)=>{

      let count = 0;
      setInterval(()=>{
        observer.next(nameArray[count]);
        if(count >= 2){
          // observer.error('Error')
        }
        if(count>=5){
          observer.complete()
        }
        count++;
      },1000)
    })

    cusObs3.subscribe(res =>{
      console.log(res)

      this.names = res;
    },(err)=>{
      this.nameStatus = 'Error';
    },()=>{
      this.nameStatus = 'Completed';
    })
  }

  ngOnDestroy(): void {
    this.sub2?.unsubscribe();
  }

}
