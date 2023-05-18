import { NgModule } from "@angular/core";

import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";

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
