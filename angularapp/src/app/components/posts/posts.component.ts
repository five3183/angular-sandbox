import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service'
import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

}
