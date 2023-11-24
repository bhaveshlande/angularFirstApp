import { Component, OnInit } from '@angular/core';
import { GuestService } from './../guest.service';
import { CommonModule } from '@angular/common';
import { Guest } from '../guest.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-guest',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css'],
})
export class ListGuestComponent {
  guests: Guest[];

  constructor(private guestService: GuestService) {
    this.guests = [];
  }

  ngOnInit() {
    this.loadGuests();
  }

  loadGuests() {
    this.guestService.getAllGuest().subscribe(
      (guestList) => {
        this.guests = guestList;
      },
      (err) => {
        console.error('Error loading guests:', err);
      }
    );
  }

  deleteGuest(id: number) {
    this.guestService.deleteGuest(id).subscribe(
      () => {
        alert('Record deleted successfully');
        this.loadGuests();
      },
      (err) => {
        console.error('Error deleting guest:', err);
      }
    );
  }
}
