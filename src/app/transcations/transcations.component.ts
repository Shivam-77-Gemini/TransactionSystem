import { Component, OnInit } from '@angular/core';
import { UseTransactionService } from '../use-transaction.service';

@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
  styleUrls: ['./transcations.component.css'],
  providers:  [ UseTransactionService]
})

export class TranscationsComponent implements OnInit {
userDetails:any={"name":"",
"firstLetter":"",
"contactNo":"",

};
transactionDetails:any=[];
// transctionDetails:any=[{
//   "transaction_type":'',
//   "transaction_method":'',
//   "amount1":'',
//   "date":'',
//   "transaction_id":'',
//   "transactionStatus":''

// },{
//   "transaction_type":'',
//   "transaction_method":'',
//   "amount1":'',
//   "date":'',
//   "transaction_id":'',
//   "transactionStatus":''

// },{
//   "transaction_type":'',
//   "transaction_method":'',
//   "amount1":'',
//   "date":'',
//   "transaction_id":'',
//   "transactionStatus":''

// },{
//   "transaction_type":'',
//   "transaction_method":'',
//   "amount1":'',
//   "date":'',
//   "transaction_id":'',
//   "transactionStatus":''

// }];
  constructor(private transactionServices:UseTransactionService) {
    this.userDetails.name=this.transactionServices.getUserDetails().name;
    this.userDetails.firstLetter=this.transactionServices.getUserDetails().first_letter;
    this.userDetails.contactNo=this.transactionServices.getUserDetails().contact_no;
    this.transactionDetails=this.transactionServices. getAllTransactionDetails();
    
this.transactionDetails.sort((first: any, second: any) => (first.date <second.date ? -1: 1));


  //   this.transctionDetails[0]['transaction_type']=this.transactionServices.getAllTransactionDetails()[0].transactionType;
  //   this.transctionDetails[0]['amount1']=this.transactionServices.getAllTransactionDetails()[0].amount;
  //   this.transctionDetails[0]['transaction_id']=this.transactionServices.getAllTransactionDetails()[0].transactionId;
  //   this.transctionDetails[0]['date']=this.transactionServices.getAllTransactionDetails()[0].date;
  //   this.transctionDetails[0]['transactionStatus']=this.transactionServices.getAllTransactionDetails()[0].transactionStatus;



  //   this.transctionDetails[1]['transaction_type']=this.transactionServices.getAllTransactionDetails()[1].transactionType;
  //  this.transctionDetails[1]['amount1']=this.transactionServices.getAllTransactionDetails()[1].amount;
  //  this.transctionDetails[1]['transaction_id']=this.transactionServices.getAllTransactionDetails()[1].transactionId;
  //  this.transctionDetails[1]['date']=this.transactionServices.getAllTransactionDetails()[1].date;
  //   this.transctionDetails[1]['transactionStatus']=this.transactionServices.getAllTransactionDetails()[1].transactionStatus;



  //  this.transctionDetails[2]['transaction_type']=this.transactionServices.getAllTransactionDetails()[2].transactionType;
  //  this.transctionDetails[2]['amount1']=this.transactionServices.getAllTransactionDetails()[2].amount;
  //  this.transctionDetails[2]['transaction_id']=this.transactionServices.getAllTransactionDetails()[2].transactionId;
  //  this.transctionDetails[2]['date']=this.transactionServices.getAllTransactionDetails()[2].date;
  //  this.transctionDetails[2]['transactionStatus']=this.transactionServices.getAllTransactionDetails()[2].transactionStatus;
   


  //  this.transctionDetails[3]['transaction_type']=this.transactionServices.getAllTransactionDetails()[3].transactionType;
  //   this.transctionDetails[3]['amount1']=this.transactionServices.getAllTransactionDetails()[3].amount;
  //   this.transctionDetails[3]['transaction_id']=this.transactionServices.getAllTransactionDetails()[3].transactionId;
  //   this.transctionDetails[3]['date']=this.transactionServices.getAllTransactionDetails()[3].date;
  //   this.transctionDetails[3]['transactionStatus']=this.transactionServices.getAllTransactionDetails()[3].transactionStatus;
  }
  ngOnInit(): void {
  }

}
