import { GuestService } from './../guest.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGuestComponent } from '../form-guest/form-guest.component';
import { Guest } from '../guest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-guest',
  standalone: true,
  imports: [CommonModule, FormGuestComponent],
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css'],
})
export class AddGuestComponent {
  constructor(private guestService: GuestService, private router: Router) {}

  saveChanges(guestToBeAdded: Guest) {
    this.guestService.addGuest(guestToBeAdded).subscribe(
      () => {
        alert('Guest Added successfully');
        this.router.navigate(['/guests']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
