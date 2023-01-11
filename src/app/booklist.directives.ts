
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({

    selector : "[testing]"
})

export class tests{

     @HostBinding("style.") value : boolean = true;

     @HostListener("click") open(){

        this.value = !this.value

     }
}