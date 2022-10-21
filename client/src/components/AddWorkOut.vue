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
              name="email"
              type="email"
              placeholder="Enter exercise name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              name="description"
              placeholder="Enter exercise decription"
            ></textarea>
          </div>
        </div>
        <button class="button is-primary">Save</button>
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
