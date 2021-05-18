import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {
    AlertText = new Subject<any>();
    
    setText(msg: string, warning : boolean = false) {
        this.AlertText.next({
            msg, warning
        })
    }
}