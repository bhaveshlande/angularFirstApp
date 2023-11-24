import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

  @Output() OnGuestEvent: EventEmitter<Guest> = new EventEmitter<Guest>();

  constructor(private formBuilder: FormBuilder) {
    this.frmGrp = this.formBuilder.group({
      id: Math.random(),
      name: '',
      contactNo: '',
    });
    // this.onGuestEvent = new EventEmitter<Guest>();
  }

  ngOnInit() {
    if (this.model !== undefined) {
      this.frmGrp.patchValue(this.model);
    }
  }

  saveChanges(guest: Guest) {
    this.OnGuestEvent.emit(this.frmGrp.value);
  }
}
