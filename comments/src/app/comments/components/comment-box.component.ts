// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../model/comment'
import { EmitterService } from '../../emitter.service';
import { CommentService } from '../services/comment.service';

// Component decorator
@Component({
  selector: 'comment-box',
  template: `
     <!-- Removed for brevity 'ssake -->
  `
  // No providers here because they are passed down from the parent component
})

// Component class
export class CommentBoxComponent { 
  // Constructor
   constructor(
      private commentService: CommentService
      ){}

  // Define input properties
  @Input() comment: Comment;
  @Input() listId: string;
  @Input() editId:string;

  editComment() {
      // Emit edit event
      EmitterService.get(this.editId).emit(this.comment);
  }

  deleteComment(id:string) {
      // Call removeComment() from CommentService to delete comment
      this.commentService.removeComment(id).subscribe(
                              comments => {
                                  // Emit list event
                                  EmitterService.get(this.listId).emit(comments);
                              }, 
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
  }
}
