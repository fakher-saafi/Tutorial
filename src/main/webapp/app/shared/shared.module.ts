import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { ServiceWizardSharedLibsModule, ServiceWizardSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [ServiceWizardSharedLibsModule, ServiceWizardSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [ServiceWizardSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceWizardSharedModule {}
