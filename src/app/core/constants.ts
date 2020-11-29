import { InjectionToken } from '@angular/core';

export enum DTLayoutDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

export const DT_WINDOW = new InjectionToken<Window>('Window');
export const DT_DOCUMENT = new InjectionToken<Document>('Document');
export const DT_DIRECTION = new InjectionToken<DTLayoutDirection>(
  'Layout Direction'
);
