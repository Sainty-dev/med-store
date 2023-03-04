import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineApiService } from 'src/app/medicine-api.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  medicineList$!:Observable<any[]>;

  constructor(private service:MedicineApiService) { }
  @Input() medicine:any;
  id: number = 0;
  name: string = "";
  dosage: string = "";
  frequency: string = "";
  notes: string = "";
  ngOnInit(): void {
    this.id = this.medicine.id;
    this.name = this.medicine.name;
    this.dosage = this.medicine.dosage;
    this.frequency = this.medicine.frequency;
    this.notes = this.medicine.notes;
  }
  addMedication() {
    var medicine = {
      name:this.name,
      dosage:this.dosage,
      frequency: this.frequency,
      notes:this.notes
    }
    this.service.addMedicine(medicine).subscribe(res => {
      var closeModalBtn = document.getElementById('createMedicineModal');
      if(closeModalBtn) {
        closeModalBtn.click();
      }
    })
  }
  updateMedication() {
    var medicine = {
      id: this.id,
      name:this.name,
      dosage:this.dosage,
      frequency: this.frequency,
      notes:this.notes
    }
    var id:number = this.id;
    this.service.updateMedicine(id,medicine).subscribe(res => {
      var closeModalBtn = document.getElementById('createMedicineModal');
      if(closeModalBtn) {
        closeModalBtn.click();
      }
    })

  }

}
