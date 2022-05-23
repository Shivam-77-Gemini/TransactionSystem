import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseTransactionService {

  constructor( ) { }
  getUserDetails(){
    return{
      "name":"Shivam Tiwari",
      "contact_no":"+916399999999",
      "first_letter":"S"

    }
  }
  getAllTransactionDetails(){
    return  [{
      "transactionType":"paid",
      "transactionStatus":"pay",
      "transactionMethod":"sent",
      "amount":"3000",
      "date":new Date("2002-07-21"),
      "transactionId":"ATYHU8978UIKHG3445"
    },
    {
      "transactionType":"requested",
      "transactionStatus":"request",
      "transactionMethod":"collect",
      "amount":"3000",
      "date":new Date(),
      "transactionId":"ATYHU8978UIKHG3445"
    },
    {
      "transactionType":"request",
      "transactionStatus":"received",
      "transactionMethod":"haveTopay",
      "amount":"3000",
      "date":new Date(),
      "transactionId":"ATYHU8978UIKHG3445"
    },
    {
      "transactionType":"received",
      "transactionStatus":"collect",
      "transactionMethod":"pending",
      "amount":"3000",
      "date":new Date("2001-12-07"),
      "transactionId":"ATYHU8978UIKHG3445"
    }
  ]

    
  }
}
