<template>
  <div class="columns is-mobile is-centered">
    <div
      class="column top-gap is-11-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd"
    >
      <div class="box">
        <h1 class="title text-center">Please Register</h1>
        <h1 class="title text-center">Signup</h1>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input
              class="input"
              name="cpassword"
              type="password"
              placeholder="Retype password"
            />
          </div>
        </div>
        <button class="button is-primary">Sign up</button>
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
