// time-list.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeListService {
  private timeListName: string = '';

  setTimeListName(name: string) {
    this.timeListName = name;
  }

  getTimeListName(): string {
    return this.timeListName;
  }
}
