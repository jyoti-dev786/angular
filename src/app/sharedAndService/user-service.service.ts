import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {brokerrs} from '../sharedAndService/model';
import {customer} from '../sharedAndService/model';
import {pointss} from '../sharedAndService/model';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  
  readonly local_api_broker ='http://localhost:63764/api';


//------------------------------------------------broker CRUD Operations----------------------------------------------------------------------------------

insert_record(formdata : brokerrs)
{
  console.log(formdata);
  return this.http.post(this.local_api_broker + '/brokerrs/' , formdata);
  
}

get_record():Observable<brokerrs[]>
{
  return this.http.get<brokerrs[]>(`${this.local_api_broker + '/brokerrs'}`);
}

delete_record(id : number)
  {
    return this.http.delete(this.local_api_broker + '/brokerrs/' + id);
    
  }

  update_record(formdata : brokerrs)
  {
    console.log(formdata);
    return this.http.put(this.local_api_broker + '/brokerrs/' + formdata.id, formdata);
  }

//--------------------------------------------Customer CRUD Operations------------------------------------------------------------------------------------------------------------

  insert_record2(formdata : customer)
  {
    console.log(formdata);
    return this.http.post(this.local_api_broker + '/customers/' , formdata);
    
  }

  get_record2():Observable<customer[]>
  {
    return this.http.get<customer[]>(`${this.local_api_broker + '/customers'}`);
  }


  delete_record2(id : number)
  {
    return this.http.delete(this.local_api_broker + '/customers/' + id);
    
  }

  update_record2(formdata : customer)
  {
    console.log(formdata);
    return this.http.put(this.local_api_broker + '/customers/' + formdata.id, formdata);
  }



  //----------------------------------Points CRUD Operations------------------------------------------------------------------------------------

  insert_record3(formdata : pointss)
  {
    console.log(formdata);
    return this.http.post(this.local_api_broker + '/pointsses/' , formdata);
    
  }

  get_record3():Observable<pointss[]>
  {
    return this.http.get<pointss[]>(`${this.local_api_broker + '/pointsses'}`);
  }

  delete_record3(id : number)
  {
    return this.http.delete(this.local_api_broker + '/pointsses/' + id);
    
  }

  update_record3(formdata : pointss)
  {
    console.log(formdata);
    return this.http.put(this.local_api_broker + '/pointsses/' + formdata.id, formdata);
  }


}
