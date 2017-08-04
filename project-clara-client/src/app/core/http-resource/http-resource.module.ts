import { NgModule, ModuleWithProviders } from '@angular/core';

import { BaseHttpResourceService } from './base-http-resource.service';

/**
 * The HttpResourceModule provides the BaseHttpResource service.
 */
@NgModule({ })
export class HttpResourceModule {

  /**
   * Returns the wrapped HttpResourceModule also containing the providers.
   * @return {ModuleWithProviders} The wrapped HttpResourceModule.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpResourceModule,
      providers: [BaseHttpResourceService]
    };
  }

}
