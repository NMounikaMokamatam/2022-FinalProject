<script setup lang="ts">
import * as users from "../data/users";

</script>
<template>
 
<div class="card" v-for="u in users.list">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{u.firstName}}  {{u.lastName}}({{u.age + "years"}})</p>
      </div>
    </div>

    <div class="content" v-for="excersise in u.excersisesList">
      {{excersise}}
    </div>
  </div>
</div>
</template>

       
 
