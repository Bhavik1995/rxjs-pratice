import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }


  print(val: any,container: string){
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(container)?.appendChild(el)
  }
}
