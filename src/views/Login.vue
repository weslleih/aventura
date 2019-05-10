<template>
  <main>
    <form v-on:submit="login($event)">
      <input type="email" v-model="email" :placeholder="$t('email')" required>
      <input type="password" v-model="password" :placeholder="$t('password')" required>
      <button type="submit">{{ $t('roll') }}</button>
    </form>
  </main>
</template>

<script>
import firebase from 'firebase/app';

export default {

  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login(event) {
      if (event) event.preventDefault();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
        () => {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              console.log(user);
              this.$router.push(this.$route.query.redirect || '/');
            }, (err) => {
              console.log(err);
            },
          );
        }, (err) => {
          console.log(err);
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
  main{
    width: 500px;
    height: 525px;
    background: url('../assets/d20.png');
    display: flex;
    align-items: center;
    justify-content: center;
    form{
      padding-top: 10px;
      text-align: center;
      width: 160px;
    }
    input{
      display: block;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
    }
    button{
      text-transform: uppercase;
      outline: 0;
      background: #e64d00;
      width: 100%;
      border: 0;
      padding: 10px;
      color: #FFFFFF;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
    }
  }
</style>
