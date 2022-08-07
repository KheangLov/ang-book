import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzListModule } from 'ng-zorro-antd/list';

const _modules = [
  NzMenuModule,
  NzCarouselModule,
  NzSwitchModule,
  NzTypographyModule,
  NzCardModule,
  NzButtonModule,
  NzAvatarModule,
  NzRadioModule,
  NzAffixModule,
  NzListModule,
];

@NgModule({
  imports: _modules,
  exports: _modules,
})
export class AntdModule {}
