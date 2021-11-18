import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

export function minusculoValidator(control:AbstractControl){
    const valor = control.value as string;
    if(valor != valor.toLowerCase()){
        return { minusculo:true };
    }else{
        return false;
    }
}