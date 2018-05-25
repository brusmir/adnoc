import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NominationService } from '../service/nomination.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dataForm: FormGroup;
  data;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private nominationService: NominationService) { 
    this.createForm();
  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.data = this.nominationService.getData(Number(id));   
      this.dataForm.patchValue(this.data[0]);   
    }
  }

  createForm() {
    this.dataForm = this.fb.group({
      'product': ["", Validators.required],
      'month': ["", Validators.required],
      'allocation': ["", Validators.required],
      'nomination': ["", Validators.required],
      'company': ["", Validators.required],
      'port': ["", Validators.required],
      'actual': ["", Validators.required],
      'status': ["", Validators.required],
      'id': ''
    });
  }

  submit() {
    this.data = this.dataForm.value;
    if (this.data.id) {
      this.nominationService.updateData(this.data);
      this.router.navigate(['/nominations']);
    } else {
      this.nominationService.saveData(this.data);
      this.router.navigate(['/nominations']);
    }
  }

}
