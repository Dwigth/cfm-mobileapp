import { Component, OnInit, Input } from '@angular/core';

import { UploadService } from '../upload.service';
import { Upload } from '../upload';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'upload-list',
  templateUrl: 'upload-list.component.html'
})
export class UploadListComponent implements OnInit {
  @Input() upload: Upload;
  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false);
  }
  deleteUpload() {
    this.upSvc.deleteUpload(this.upload);
  }
}
