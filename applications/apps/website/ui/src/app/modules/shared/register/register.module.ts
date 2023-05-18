import { NgModule } from "@angular/core";

import { RegisterComponent } from "./register.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule
    ],
    declarations: [
        RegisterComponent
    ],
    exports: [
        RegisterComponent
    ]
})
export class SharedRegisterModule { }
