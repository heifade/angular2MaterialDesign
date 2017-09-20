import { Injectable } from '@angular/core';
import { DjdWait } from '../component/djd-wait/djd-wait.component';
import { DjdMessage, DjdMessageParams } from '../component/djd-message-dialog/djd-message-dialog.component';


/**
 * 
 */
@Injectable()
export class GlobalService {
  constructor() {}

  public wait: DjdWait;
  public messageDialog: DjdMessage;


  

}