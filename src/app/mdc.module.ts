import {NgModule} from '@angular/core';
import {MdcButtonModule, MdcCardModule, MdcIconModule, MdcMenuModule, MdcTopAppBarModule} from '@angular-mdc/web';

@NgModule({
  imports: [
    MdcButtonModule,
    MdcCardModule,
    MdcMenuModule,
    MdcIconModule,
    MdcTopAppBarModule
  ],
  exports: [
    MdcButtonModule,
    MdcCardModule,
    MdcIconModule,
    MdcMenuModule,
    MdcTopAppBarModule
  ]
})
export class MdcModule {

}
