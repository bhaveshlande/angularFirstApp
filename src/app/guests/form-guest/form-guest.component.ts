import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Guest } from '../guest.model';

@Component({
  selector: 'app-form-guest',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './form-guest.component.html',
  styleUrls: ['./form-guest.component.css'],
})
export class FormGuestComponent {
  frmGrp: FormGroup;

  @Input()
  model!: Guest;

  @Output()
  onGuestEvent: EventEmitter<Guest>;

  constructor(private formBuilder: FormBuilder) {
    this.frmGrp = this.formBuilder.group({
      id: Math.random(), // Consider a more robust approach for generating IDs
      name: '',
      contactNo: '',
    });
    this.onGuestEvent = new EventEmitter<Guest>();
  }

  ngOnInit() {
    if (this.model !== undefined) {
      this.frmGrp.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onGuestEvent.emit(this.frmGrp.value);
  }
}
