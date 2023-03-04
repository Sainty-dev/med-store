import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineApiService {
readonly inspectionAPIUrl ="https://localhost:7178/api"
  constructor(private http:HttpClient) { }

  //Medicines
  //get list of medicine
  getMedicineList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/Medicines')
  }

  //add medicine

  addMedicine(data:any){
    return this.http.post(this.inspectionAPIUrl + '/Medicines',data)
  }

  //edit medicine
  updateMedicine(id:number|string,data:any){
    return this.http.put(this.inspectionAPIUrl + `/Medicines/${id}`,data);
  }
  
  //delete medicine

  deleteMedicine(id:number|string){
    return  this.http.delete(this.inspectionAPIUrl + `/Medicines/${id}`);
  }


}
