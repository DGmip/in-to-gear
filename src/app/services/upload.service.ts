import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { HasherService } from '../services/hasher.service';

@Injectable()
export class UploadService {

  storageRef = firebase.storage().ref();
  mountainsRef = this.storageRef.child('mountains.jpg');
  mountainImagesRef = this.storageRef.child('images/mountains.jpg')
  imagesRef = this.storageRef.child('images')
  file = 'what'

  constructor(
    public hasher: HasherService,
  ) {}

  uploadTask(files: any): any {
    let hash = this.hasher.hashCode(files[0].name)
    return this.storageRef.child('images/' + hash).put(files[0])
  }

  taskComplete(hash: number): void {
  }

}
