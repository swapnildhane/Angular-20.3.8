import { provideHttpClient } from '@angular/common/http';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
});
