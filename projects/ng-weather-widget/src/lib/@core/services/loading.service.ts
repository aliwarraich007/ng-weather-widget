import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _loadingStatus: Observable<boolean> = this.loading$.asObservable();

  get getLoadingStatus() {
    return this._loadingStatus;
  }

  set setLoadingStatus(val: boolean) {
    this.loading$.next(val);
  }
}
