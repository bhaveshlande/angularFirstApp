import { FormsModule } from '@angular/forms';
import { Guest } from './../guest.model';
import { GuestService } from './../guest.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGuestComponent } from '../form-guest/form-guest.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-guest',
  standalone: true,
  imports: [CommonModule, FormGuestComponent, FormsModule],
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css'],
})
export class EditGuestComponent {
  guestId!: number;
  model!: Guest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private guestService: GuestService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Route Parameters:', params);
      this.guestId = Number(params['id']);
      this.guestService.getGuestById(this.guestId).subscribe(
        (guestToBeEdited: Guest) => {
          this.model = guestToBeEdited;
          console.log('Guest Data:', this.model);
        },
        (error) => {
          console.error('Error fetching guest data:', error);
        }
      );
    });
  }

  saveChanges(guestToBeEdited: Guest) {
    this.guestService.editGuest(this.guestId, guestToBeEdited).subscribe(
      () => {
        alert('Guest edited successfully');
        this.router.navigate(['/guests']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
