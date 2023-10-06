<template>
  <form class="signup" @submit.prevent="checkForm">
    <div class="form-group">
      <label for="login">LogIn:</label>
      <input
        id="login"
        :class="$v.form.login.$error ? 'is-invalid' : ''"
        v-model.trim="form.login"
        class="form-control"
      />
      <p
        v-if="$v.form.login.$dirty && !$v.form.login.required"
        class="invalid-feedback"
      >
        Error
      </p>
      <p
        v-if="$v.form.login.$dirty && !$v.form.login.minLength"
        class="invalid-feedback"
      >
        Error
      </p>
    </div>
    <div class="form-group">
      <label for="login">Email:</label>
      <input
        id="email"
        v-model.trim="form.email"
        type="email"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="login">Password:</label>
      <input
        id="password"
        v-model.trim="form.password"
        type="password"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="country">Country:</label>
      <select id="country" v-model="form.country" class="form-control">
        <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="themes">Themes:</label>
      <select
        id="themes"
        class="form-control"
        v-model="form.favouriteThemes"
        multiple
      >
        <option v-for="(theme, index) in themes" :key="index">
          {{ theme.label }}
        </option>
      </select>
    </div>
    <div class="form-group form-check">
      <input
        id="notification"
        type="checkbox"
        class="form-check-input"
        value="1"
        v-model="form.agreeWith"
      />
      <label class="form-check-label" for="notification"
        >Уведомлять меня о новых курсах</label
      >
    </div>
    <div class="form-group form-check">
      <input
        id="notification2"
        type="checkbox"
        class="form-check-input"
        value="2 "
        v-model="form.agreeWith"
      />
      <label class="form-check-label" for="notification2"
        >Согласие на обработку персональных данных</label
      >
    </div>
    <div class="flex">
      <div class="form-check">
        <input
          type="radio"
          value="male"
          name="exampleRadios"
          v-model="form.gender"
          id="male"
          checked
        />
        <label for="male" class="form-check-label">Men</label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          value="female"
          name="exampleRadios"
          id="female"
          v-model="form.gender"
          checked
        />
        <label for="female" class="form-check-label">Women</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        login: "",
        email: "",
        password: "",
        country: "Russia",
        favouriteThemes: ["IT"],
        agreeWith: [],
        gender: "male",
      },
      countries: [
        {
          label: "Russia",
          value: "Russia",
        },
        {
          label: "TJK",
          value: "TJK",
        },
        {
          label: "USA",
          value: "USA",
        },
      ],
      themes: [
        {
          label: "Технологии",
          value: "IT",
        },
        {
          label: "Языки",
          value: "languages",
        },
        {
          label: "Математика",
          value: "mathematics",
        },
      ],
    };
  },
  validations: {
    form: {
      login: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("text");
      }
    },
  },
};
</script>
