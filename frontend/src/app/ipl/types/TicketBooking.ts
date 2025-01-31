
export class TicketBooking {
  bookingId: number;
  email: string;
  matchId: number;
<<<<<<< HEAD
  numberOfTickets: number;
=======
  numberOfTicketes: number;
>>>>>>> 962ee48949aa724f949bdd38cc910a1e04cf0304

  constructor(
    bookingId: number,
    email: string,
    matchId: number,
<<<<<<< HEAD
    numberOfTickets: number,
=======
    numberOfTicketes: number,
>>>>>>> 962ee48949aa724f949bdd38cc910a1e04cf0304
  ){
    this.bookingId=bookingId;
    this.email=email;
    this.matchId=matchId;
<<<<<<< HEAD
    this.numberOfTickets=numberOfTickets;
=======
    this.numberOfTicketes=numberOfTicketes;
>>>>>>> 962ee48949aa724f949bdd38cc910a1e04cf0304
  }
  displayInfo(){
    console.log(`Booking ID: ${this.bookingId}`);
    console.log(`Email: ${this.email}`);
<<<<<<< HEAD
    console.log(`Number of tickets: ${this.numberOfTickets}`);
=======
    console.log(`Number of tickets: ${this.numberOfTicketes}`);
>>>>>>> 962ee48949aa724f949bdd38cc910a1e04cf0304
  }
}