import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";

export class CustomValidator{
    static invalidProjectName(control : FormControl) : {[s : string] : boolean} | null{
        if(control.value === 'Test'){
            return {'invalidProjectName' : true}
        }
        return null;
    }


    static asyncInvalidProjectName() : AsyncValidatorFn{
        return (control : AbstractControl) : Observable<ValidationErrors | null> =>{
         if(!control.value){
             return of(null);
         }
         return of(control.value).pipe(
             delay(1000),
             map((value) => {
                 if(value === 'TestProject'){
                     return {'invalidProjectName' : true}
                 }
                 return null;
             })
         )
        }
     }
}