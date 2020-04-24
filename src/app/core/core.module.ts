import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
