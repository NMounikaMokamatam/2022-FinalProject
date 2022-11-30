<script lang="ts">
import * as users from "../data/users";
import session from "../stores/session";
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      session: session.user,
      generalUsers: users.list,
      inputComment: false,
      comments: users.list[0].comments,
      currentUserComments: users.list[0].username + " " + users.list[0].lastName,
      commentText: "",
      userInfo: users.list[0]
    }
  },
  methods: {
    deleteUser(deleteuser) {
      this.generalUsers = this.generalUsers.filter((user) => user.email != deleteuser.email)
    },
    showCommentBox(user) {
      this.inputComment = true
      this.comments = user.comments
      this.currentUserComments = user.username + " " + user.lastName
      this.userInfo = user
    },
    addComment() {
      this.comments.push({ title: this.commentText, createdBy: this.session?.username, })
      //reset
      this.commentText = ""
      this.inputComment = false
    },
    getComments(user) {
      this.inputComment = false
      this.userInfo = user
      this.currentUserComments = user.username + " " + user.lastName
      this.comments = this.userInfo.comments
    }
  }
})

</script>
<template>


  <div class="columns">
    <div class="column">
      <div class="card" v-for="u in generalUsers.filter((user) => !user.isAdmin)"
        style="height: 250px; width: 600px; margin-bottom: 5px;">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ u.firstName }} {{ u.lastName }} ({{ u.age + " years" }})</p>
            </div>
          </div>
          <div class="content" v-for="excersise in u.excersisesList">
            {{ excersise.excersise }}: {{ excersise.description }}
          </div>
          <div>
            <span v-if="(u.comments.length > 0)" style="color:coral">{{ u.comments.length }} comments</span>
            <span v-if="(u.comments.length == 0)" style="color:coral">Be the first to comment</span>
            <span
              style="color: blue; cursor: pointer; float: right; background-color:aquamarine; padding: 10px; color: black;"
              v-on:click="showCommentBox(u)">Comment</span>
            <span style="padding: 20px; float: right; "></span>
            <span
              style="color: blue; cursor: pointer; float: right; background-color:coral; padding: 10px; color: black;"
              v-if="(u.comments.length > 0)" v-on:click="getComments(u)">Read comments
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="column" style="margin-top: 15px;">
      <div v-if="inputComment">
        <h1 style="font-weight: bold; margin-bottom: 20px;">Comments for {{ currentUserComments }}</h1>

        Add Comment
        <textarea class="textarea is-info" placeholder="Add your comments here" v-model="commentText">

        </textarea>
        <div class="buttons" style="margin-top: 10px; float: right;">
          <button class="button is-info" style="float: right;" v-on:click="addComment()">Submit</button>
        </div>
      </div>
      <div v-else>
        <h1 style="font-weight: bold; margin-bottom: 20px;">Comments for {{ currentUserComments }}</h1>
        <p v-if="(comments.length == 0)">There no comments for this user</p>
        <div v-else>
          <article class="message" style="margin-top: 3px;" v-for="comment in comments">
            <div class="message-body"  >
              <strong>{{comment.createdBy}}</strong><br>
              {{comment.title}}
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

</template>

       
 
