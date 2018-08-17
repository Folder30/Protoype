import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { MenuhautComponent } from './menuhaut/menuhaut.component';

import { HomePage } from './home.page';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, BasicComponent, MenuhautComponent, TestComponent]
})
export class HomePageModule {}
