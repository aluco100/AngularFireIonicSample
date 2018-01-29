import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<string>;
  public doc: any;
  public itemName:string;

  constructor(db: AngularFirestore) {
    this.doc = db.collection('messages').doc('messages');
    this.doc.valueChanges().subscribe(algo => {
      console.log(algo["messages"]);
      this.items = algo["messages"];
    });

    console.log(this.items);
  }

  addItem(){
    this.items.push(this.itemName);
    this.doc.set({
      "messages" : this.items
    });
  }

}
