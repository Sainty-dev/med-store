import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { MedicineApiService } from 'src/app/medicine-api.service';

@Component({
  selector: 'app-show-medicine',
  templateUrl: './show-medicine.component.html',
  styleUrls: ['./show-medicine.component.css']
})
export class ShowMedicineComponent implements OnInit {
   medicineList$!:Observable<any[]>
     constructor(private service:MedicineApiService){}
   ngOnInit(): void{
    this.medicineList$ = this.service.getMedicineList();
    console.log("thh",this.medicineList$)
   }
   modalTitle:string = '';
   activateAddEditInspectionComponent:boolean = false;
   medicine:any;
 
   modalAdd() {
     this.medicine = {
       id:0,
       name:null,
       dosage:null,
       frequency:null,
       notes:null
     }
     this.modalTitle = "Add Medication";
     this.activateAddEditInspectionComponent = true;
   }
   modalEdit(item:any) {
    this.medicine = item;
    this.modalTitle = "Edit Medication";
    this.activateAddEditInspectionComponent = true;
  }
   modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.medicineList$ = this.service.getMedicineList();
  }

  delete(item:any) {

      this.service.deleteMedicine(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('deleteModal');
      if(closeModalBtn) {
        closeModalBtn.click();
      }
      this.medicineList$ = this.service.getMedicineList();
      })
    
  }
}
