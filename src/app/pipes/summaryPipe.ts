import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?:number) {
        if (value==null) return null;

        limit=limit?limit:20;
        
        if (limit>value.length) {
            return value;
        }

        return value.substring(0,limit)+"...";
    } //FIrst parameter is string value coming from where using place of pipe. Second parameter is filter parameter where using place of pipe. If we will be talk about this pipe, this parameter is value for needed to set limited string variable.
}