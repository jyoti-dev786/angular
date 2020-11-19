import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {customer} from '../sharedAndService/model';
import {UserServiceService} from '../sharedAndService/user-service.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private UserService : UserServiceService) { }

  ngOnInit(): void {
    this.resetForm();
    this.grid();
  }

  model : customer;
  resetForm(form ? : NgForm)
  {
    if(form != null)
      form.reset();

    this.model =
    {
      id : null,
      broker_id : '',
      name : '',
      mob : null,
      psw : '',
    }

  }


  customer_list : any;
  grid() 
  {
    this.UserService.get_record2().subscribe(data => {
     // console.log(data);
      this.customer_list=(data);
      console.log(this.customer_list);
    });
  }

 
  insertRecord(form : NgForm)
  {
    
    this.UserService.insert_record2(form.value).subscribe((data : any) => {
      console.log(data);
      this.grid();
      this.resetForm();
    });
  }


  deleteRecord(id:number)
 {
       if(confirm("Are you sure u want to delete the record"))
       {
         this.UserService.delete_record2(id).subscribe(res => {
            this.grid();
            
         });
       } 
 }


 updateRecord(form : NgForm)
 {
   this.UserService.update_record2(form.value).subscribe((res : any) =>{
      alert("Record Updated Sucessfully");
      this.resetForm(form);
      this.grid();
      
   });
 }


 editRecord_or_populate_form(element :customer)
 {
   this.model =Object.assign({}, element);
   console.log(this.model);
 }


 OnSubmit(form : NgForm)
{
  if(form.value.id == null)
  {
    this.insertRecord(form);
    //console.log(form);
    //this.grid();
  }

  else
  {
    this.updateRecord(form);
  }



}














}
