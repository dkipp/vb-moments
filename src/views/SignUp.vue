<template>
  <section class="section">
    <h1 class="title has-text-centered">Sign-up</h1>
    <div class="columns">
      <div class="column is-one-third">

        <div class="card">
          <div class="card-header is-centered">
            <h2 class="card-header-title is-centered">Create an Account</h2>
          </div>
          <div class="card-content">
            <form v-on:submit.prevent>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="joe@bloggs.com" v-model="email">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="password">
                </div>
              </div>
              <button type="submit" class="button is-primary" v-on:click="signUp">Sign-up</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import Firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('dashboard');
          },
          error => {
            alert(error.message);
          }
        );
    }
  }
};
</script>

<style lang="scss">
// Basic styles are pulled in from the Bulma framework https://bulma.io/
// These style tags could be omitted as they arre not used.
</style>