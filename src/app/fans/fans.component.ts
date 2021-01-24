import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment, CommentsService} from "../shared/comments.service";


@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss']
})
export class FansComponent implements OnInit {
  comments: Comment[] = []
  constructor(private commentService: CommentsService) {
  }
  fansForm = new FormGroup({
    comment: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)])
  })
  submit() {
    const {comment} = this.fansForm.value;
    this.commentService.create(comment).subscribe(res => this.commentService.load().subscribe(comments => {
      this.comments = comments
    }))
  }
  ngOnInit() {
    this.commentService.load().subscribe(comments => {
      this.comments = comments
    })
  }
}
