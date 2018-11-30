import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PostService } from 'src/app/services/posts.service';

import { Post } from '../../models/Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService,
  ) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id')
    this._postService.getPost(id).subscribe(post => {
      this.post = post
    })
  }

}
