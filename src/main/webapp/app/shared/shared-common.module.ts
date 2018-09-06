import { NgModule } from '@angular/core';

import { PegasusSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PegasusSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PegasusSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PegasusSharedCommonModule {}
