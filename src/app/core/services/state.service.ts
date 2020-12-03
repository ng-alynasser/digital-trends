import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface AppState {
  mobileNavMenuIsOpen: boolean;
}

export const initialState: AppState = {
  mobileNavMenuIsOpen: false,
};

@Injectable()
export class StateService {
  private state: AppState = initialState;
  private readonly stateSubject$ = new BehaviorSubject<AppState>(this.state);

  constructor() {}

  setState<T extends keyof AppState>(key: T, value: AppState[T]): void {
    this.state[key] = value;
    this.stateSubject$.next(this.state);
  }

  select<R>(selector: (state: AppState) => R): Observable<R> {
    return this.stateSubject$.pipe(map(selector), distinctUntilChanged());
  }
}
