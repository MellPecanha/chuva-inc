import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentComponent } from './components/content/content.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ContentComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentComponent, AsideComponent, HeaderComponent, FooterComponent]
})
export class AppModule {}
