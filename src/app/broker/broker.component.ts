import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {brokerrs} from '../sharedAndService/model';
import {UserServiceService} from '../sharedAndService/user-service.service';




@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {

  constructor(private UserService : UserServiceService) { }

  ngOnInit(): void {
    this.resetForm();
    this.grid();
  }

  model : brokerrs;
  resetForm(form ? : NgForm)
  {
    if(form != null)
      form.reset();

    this.model =
    {
      id : null,
      name : '',
      city : '',
      addr : '',
      mob : null,
      psw : '',
    }

  }

  broker_list:any;
  grid() 
  {
    this.UserService.get_record().subscribe(data => {
     // console.log(data);
      this.broker_list=(data);
      console.log(this.broker_list);
    });
  }
  
  insertRecord(form : NgForm)
  {
    
    this.UserService.insert_record(form.value).subscribe((data : any) => {
      console.log(data);
      this.grid();
      this.resetForm();
    });
  }


  deleteRecord(id:number)
 {
       if(confirm("Are you sure u want to delete the record"))
       {
         this.UserService.delete_record(id).subscribe(res => {
            this.grid();
            
         });
       } 
 }


 updateRecord(form : NgForm)
 {
   this.UserService.update_record(form.value).subscribe((res : any) =>{
      alert("Record Updated Sucessfully");
      this.resetForm(form);
      this.grid();
      
   });
 }


 editRecord_or_populate_form(element :brokerrs)
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
