import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {pointss} from '../sharedAndService/model';
import {UserServiceService} from '../sharedAndService/user-service.service';




@Component({
  selector: 'app-pointss',
  templateUrl: './pointss.component.html',
  styleUrls: ['./pointss.component.css']
})
export class PointssComponent implements OnInit {

  constructor(private UserService : UserServiceService) { }


  ngOnInit(): void {
    this.resetForm();
    this.grid();
  }


  model : pointss;
  resetForm(form ? : NgForm)
  {
    if(form != null)
      form.reset();

    this.model =
    {
      id : null,
      points : '',
      datee : '',
      cus_id : '',
      
    }

  }

  points_list : any;
  grid() 
  {
    this.UserService.get_record3().subscribe(data => {
     // console.log(data);
      this.points_list=(data);
      console.log(this.points_list);
    });
  }


  insertRecord(form : NgForm)
  {
    
    this.UserService.insert_record3(form.value).subscribe((data : any) => {
      console.log(data);
      this.grid();
      this.resetForm();
    });
  }


  deleteRecord(id:number)
 {
       if(confirm("Are you sure u want to delete the record"))
       {
         this.UserService.delete_record3(id).subscribe(res => {
            this.grid();
            
         });
       } 
 }


 updateRecord(form : NgForm)
 {
   this.UserService.update_record3(form.value).subscribe((res : any) =>{
      alert("Record Updated Sucessfully");
      this.resetForm(form);
      this.grid();
      
   });
 }


 editRecord_or_populate_form(element :pointss)
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
