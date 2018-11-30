import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/posts.service'
import { Post } from '../../models/Post'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter()
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter()

  @Input() currentPost: Post
  @Input() isEdit:boolean


  constructor(private _postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if(!title || !body) {
      alert('All fields are required!')
    } else {
      return this._postService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post)
      })
    }
  }

  updatePost() {
    this._postService.updatePost(this.currentPost).subscribe(post => {
      this.isEdit = false
      this.updatedPost.emit(post)
    })
  }
}
