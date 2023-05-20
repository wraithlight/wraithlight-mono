import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class SharedLoginModule { }
