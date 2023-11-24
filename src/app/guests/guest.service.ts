import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guest } from './guest.model';
@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private httpClient: HttpClient) {}
  getAllGuest() {
    return this.httpClient.get<Guest[]>('http://localhost:3000/guests');
  }
  getGuestById(id: number) {
    return this.httpClient.get<Guest>(`http://localhost:3000/guests/${id}`);
  }
  addGuest(guestToBeAdded: Guest) {
    return this.httpClient.post('http://localhost:3000/guests', guestToBeAdded);
  }
  editGuest(id: number, guestToBeEdited: Guest) {
    return this.httpClient.put(
      `http://localhost:3000/guests/${id}`,
      guestToBeEdited
    );
  }
  deleteGuest(id: number) {
    return this.httpClient.delete(`http://localhost:3000/guests/${id}`);
  }
}
