import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UploadService } from '../services/upload.service';
import { HasherService } from '../services/hasher.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {
  @Output() uploadedEmitter: EventEmitter<any> = new EventEmitter();

  state: string = 'ready';
  progress: number = 0;

  public imageSrc: string

  public uploadTask: any
  hash: number;

  constructor(
    public uploadServ: UploadService,
    public hasher: HasherService,
  ) {}

  changedHandler(ev, files): void {
    console.log(files[0].name)

    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    }
    reader.readAsDataURL(files[0])
    this.upload(files);

  }

  upload(files: any): void {
    this.state = 'loading';

    this.uploadTask = this.uploadServ.uploadTask(files)

    this.hash = this.hasher.hashCode(files[0].name)

    this.uploadTask.on('state_changed', (snapshot) => {
      let progress = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100
      console.log('Upload is ' + progress + '% done');
      this.progress = progress;
      if(progress === 100) {
        this.imageUploaded();
      }
      switch (snapshot['state']) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }

    }, (error) => {
      this.state = 'error';
      console.log('error occured uploading image', error)
    })
  }

  imageUploaded(): void {
    this.state = 'success';
    firebase.storage().ref('images/'+this.hash).getDownloadURL()
      .then((url) => {
        this.uploadedEmitter.emit(url)
      })

  }

  ngOnInit() {}

}
