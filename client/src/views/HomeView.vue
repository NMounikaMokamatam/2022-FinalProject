<script setup>
import {ref} from 'vue'
import session from "../stores/session";


let excersiseName = ref('');
let description = ref('');


function addExcersise(){
    session.user.excersisesList.unshift({
      excersise: excersiseName.value,
      description: description.value
    })
}
</script>
<template>
  <div class="columns is-mobile is-centered">
    <div
      class="column top-gap is-11-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd"
    >
      <div class="box">
        <h1 class="title text-center">New Workout Exercise</h1>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              placeholder="Enter exercise name" v-model="excersiseName"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input
            v-model="description"
              class="textarea"
              name="description"
              placeholder="Enter exercise decription"
            />
          </div>
        </div>
        <button type="submit" class="button is-primary" v-on:click="addExcersise()">Save</button>
      </div>
    </div>
  </div>
  <div class="container is-max-desktop">
    <div class="notification is-light">
      <h1 style="font-size: 2em;">ExcersiseList:</h1>
      <div class="notification is-dark" v-for="e in session.user.excersisesList">
        <button class="delete" @click=""></button>
        {{ e.excersise }}
        <p>{{e.description}}</p>
      </div>
    </div>
  </div>
</template>
<style>
.top-gap {
  margin-top: 2rem;
}
.text-center {
  text-align: center;
}
</style>

