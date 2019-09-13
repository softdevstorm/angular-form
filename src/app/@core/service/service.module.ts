import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule } from '@angular/common';
import {UserService} from './user.service';
import {ValidationService} from './validation.service';;

const SERVICES = [
  UserService,
  ValidationService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        ...SERVICES,
      ],
    } as ModuleWithProviders;
  }
}
