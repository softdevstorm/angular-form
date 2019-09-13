import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {ServiceModule} from './service/service.module';

const COMPONENTS = [

];
export const CORE_PROVIDERS = [
  ...ServiceModule.forRoot().providers,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  entryComponents: [...COMPONENTS]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS,
      ],
    } as ModuleWithProviders;
  }
}
