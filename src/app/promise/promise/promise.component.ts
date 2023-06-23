import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  // valuePromise?: string;

  constructor() { }

  dellAvailable() {
    return false
  }

  hpAvailable() {
    return false
  }

  dell = {
    brand: 'Dell',
    hard_disk: '2TB',
    color: 'Black'
  }

  HP = {
    brand: 'HP',
    hard_disk: '1TB',
    color: 'Sliver'
  }

  notAvailable = {
    message: 'Not Available',
    status: 'Failed'
  }

  valuePromise: any;

  ngOnInit(): void {

    let newLaptop = new Promise((resolve, reject) => {

      if (this.dellAvailable()) {
        setTimeout(() => {
          // resolve('Dell is available');
          resolve(this.dell);

        }, 3000);
      }
      else if (this.hpAvailable()) {
        setTimeout(() => {
          // resolve("HP is available");
          resolve(this.HP);
        }, 3000);
      }
      else {
        // reject("Laptop not available");
        reject(this.notAvailable);
      }

    });

    newLaptop.then(res => {
      console.log("then code =>", res);
      this.valuePromise = res;
    }).catch(res => {
      console.log("catch code", res);
      this.valuePromise = res;
    })
  }

}
