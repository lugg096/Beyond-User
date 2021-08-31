import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('data1');
  private messageSource2 = new BehaviorSubject('data2');
  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  changeMessage2(message: any) {
    this.messageSource2.next(message)
  }



}
