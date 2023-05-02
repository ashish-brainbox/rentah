import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ReactiveFormsModule
  ]
})
export class NotificationModule { }
