import { Injectable } from "@angular/core";
declare let alertify:any;
@Injectable() // Injectable term provide to call this call whenever you want inside of the module. I gave some important information in 'app.module.ts' about here.
export class AlertifyService{
    constructor(){}

    success(message:string){
        alertify.success(message);
    }
    warning(message:string){
        alertify.warning(message);
    }
    error(message:string){
        alertify.error(message);
    }
}