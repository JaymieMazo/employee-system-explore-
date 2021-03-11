<template>
  <div>
    <v-row>
      <v-col sm="2"> </v-col>
      <v-col sm="8">
        <div class="container container--fluid fill-height">
          <div
            class="layout align-center justify-center"
            style="margin-top: 10%"
          >
            <v-card
              light
              elevation="20"
              class="mx-auto pl-3 pr-3"
              style="max-width: 700px"
              border-radius="10px"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="5"
                  md="5"
                  style="
                    border-radius: 10px 0px 0px 10px;
                    background-color: teal;
                    border-bottom: 20px solid teal;
                    border-top: 20px solid scheme.tablehead;
                  "
                >
                  <v-row>
                    <v-col></v-col>
                    <v-col>
                      <v-img
                        light
                        src="/images/ds_logo2.png"
                        arial-label="image"
                        role="img"
                      >
                      </v-img>
                    </v-col>
                    <v-col></v-col>
                  </v-row>
                  <div
                    style="margin: auto; text-align: center; color: whitesmoke"
                  >
                    Employee management systems are useful for running a smooth
                    organization, especially organizations of scale.
                  </div>
                  <div class="mt-4" style="margin: auto; width: 80%">
                    <v-img
                      light
                      src="images/company_logo.png"
                      arial-label="image"
                      role="img"
                    ></v-img>
                  </div>
                </v-col>
                <v-col cols="12" sm="7" md="7">
                  <fieldset
                    style="
                      border: solid 1px #000000;
                      border-radius: 10px;
                      height: 95%;
                      max-width: 100%;
                    "
                  >
                    <legend class="ml-3" style="width: auto; font-size: 13px">
                      USER LOGIN
                    </legend>
                    <v-form ref="frmLogin" v-model="loginValid" lazy-validation>
                      <v-card-text>
                        <center>
                          <v-img
                            light
                            src="/images/group-icon-png.png"
                            style="width: 104px"
                            aria-label="Logo"
                            role="img"
                          >
                          </v-img>
                        </center>
                        <v-text-field
                          :autocomplete="false"
                          prepend-inner-icon="mdi-account"
                          :rules="[rules1.required]"
                          v-model="txtUserID"
                          outlined
                          dense
                          label="UserID"
                          required
                        ></v-text-field>
                        <p>{{ act1 }}</p>
                        <v-text-field
                          :autocomplete="false"
                          prepend-inner-icon="mdi-lock"
                          :rules="[rules1.required]"
                          v-model="txtPass"
                          :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showpass ? 'text' : 'password'"
                          @click:append="showpass = !showpass"
                          outlined
                          dense
                          label="Password"
                          required
                        >
                        </v-text-field>
                        <v-row>
                          <v-spacer></v-spacer>
                          <v-btn
                            :disabled="txtUserID == '' || txtPass == ''"
                            :loading="loading_login"
                            class="mr-4"
                            color="#337ab7"
                            style="color: white"
                            @click="stdvalidate()"
                            >LOGIN
                            <v-icon>mdi-lock</v-icon>
                          </v-btn>
                        </v-row>
                      </v-card-text>
                    </v-form>
                  </fieldset>
                  <span style="float: right">v.1.0.0</span>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </div>
      </v-col>
      <v-col sm="2"> </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      act1_val: [],
      loginValid: true,
      txtUserID: "-a sdfsfsf -b sdfsfsdf -c",
      txtPass: "",
      showpass: false,
      loading_login: false,
      rules1: {
        required: (value) => !!value || "Required.",
      },
      izitoast: {
        balloon: false,
        close: true,
        closeOnEscape: false,
        position: "topRight",
        timeout: 2000,
        animateInside: true,
        pauseOnHover: true,
      },
    };
  },
  computed: {
    // revUserID(){
    //   return this.txtUserID.split('').reverse().join('');
    // }
    act1() {
      // for ($i = 0; $i <= this.txtUserID.length; $i++){
      //   console.log('yeah');
      // }
      var text = this.txtUserID;
      let arr_text = [];
      var i = 0;
      for (i; i <= text.length; i++) {
        arr_text.push(text[i]);
      }
      console.log(arr_text);
      let res = [];
      $.each(arr_text, function (key, value) {
        // console.log(value + key)
        if (arr_text[key] == "-" && arr_text[key + 1].match(/[a-zA-Z]/i)  ) {
          // arr_text[key + 1] == arr_text[key + 1].toLowerCase()
          res.push(arr_text[key] + arr_text[key + 1]);
        }
      });
      console.log(res);
    },
  },
  methods: {
    isCharacterALetter(c) {
      return /[a-zA-Z]/.test(c);
    },
    stdvalidate() {
      this.loading_login = true;
      setTimeout(() => {
        this.loading_login = false;

        if (this.txtUserID == this.txtPass) {
          this.$store.commit("initialData", {
            logged: 1
          });
          location.href = "home";
        }
      }, 1000);
    },
  },
};
</script>
