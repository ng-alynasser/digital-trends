import { Injectable } from '@angular/core';

export type LocalStorageKey = 'uiLanguageCode';
const PREFIX = 'DT_';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public set(key: LocalStorageKey, value: any): void {
    const keyName = this.keyName(key);
    localStorage.setItem(keyName, JSON.stringify(value));
  }

  public get(key: LocalStorageKey): any {
    const keyName = this.keyName(key);
    const item = localStorage.getItem(keyName);
    let result: any;
    try {
      result = JSON.parse(item || 'null');
    } catch (e) {
      console.error(
        `Could not parse the localStorage value for "${key}" (${item})`
      );
    }
    return result;
  }

  public remove(key: LocalStorageKey): void {
    const keyName = this.keyName(key);
    localStorage.removeItem(keyName);
  }

  private keyName(key: LocalStorageKey): string {
    return PREFIX + key;
  }
}
