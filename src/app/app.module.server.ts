import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [ServerModule, AppModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
