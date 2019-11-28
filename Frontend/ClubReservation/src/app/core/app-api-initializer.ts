import { Provider, APP_INITIALIZER } from '@angular/core';
import { GlobalConfigService } from './services/global-config.service';

export function initApiConfiguration(configService: GlobalConfigService): Function {
  return () => {
    return configService.load();
  };
}

export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [GlobalConfigService],
  multi: true,
};
