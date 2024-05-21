<template>
    <div>
       <div class="" >
         <div class="p-4 d-flex bg-dark justify-content-between align-items-center" style="position: sticky;top: 0;z-index: 1000;">
        <div class="d-flex justify-content-start align-items-center">
           <nav class="navbar navbar-expand-lg sticky-top ">
              <div class="container">
                 <a class="text-white navbar-brand fw-bold" href="#">CodeLab</a>
               </div>
           </nav>
         </div>
          <div class="d-flex justify-content-start align-items-center">
           <nav class=" navbar navbar-expand-lg sticky-top ">
              <div class="container">
                 <div class="collapse navbar-collapse" id="">
                   <ul class="navbar-nav" >
                     <li class="nav-item" v-if="eng">
                       <a class="nav-link fw-semibold fs-5" @click="myanLan" href="#">
                        <img src="assets/img/ukFlag.png" style="width: 36px;"/>
                       </a>
                     </li>
                     <li class="nav-item" v-if="myan">
                       <a class="nav-link fw-semibold fs-5" @click="engLan" href="#">
                        <img src="assets/img/myanFlag.png" style="width: 36px;"/>
                       </a>
                     </li>
                     <li class="nav-item p-1">
                      <div class="">
                        <a href="#" class="text-white nav-link fw-semibold" v-if="dark" @click="darkMode">
                          <span class="material-symbols-outlined">dark_mode</span>
                        </a>
                        <a href="#" class="text-white nav-link fw-semibold" v-if="light" @click="lightMode">
                          <span class="material-symbols-outlined" >light_mode</span>
                        </a>
                      </div>
                     </li>
                     <li class="nav-item p-1">
                       <button class="btn-primary rounded p-2" @click="register">
                         <span class="mx-3" v-if="eng">Sign up</span>
                         <span class="mx-3" v-if="myan">ဆိုင်းအပ်</span>
                       </button>
                     </li>
                   </ul>
                 </div>
               </div>
           </nav>
         </div>
         </div>
          <div class="bgImg col-12 p-5 d-flex align-items-center justify-content-end">
            
            <div class="col-4 p-5 bg-white rounded shadow-sm">
                <h4 v-if="eng" class="mb-3">Login to start learning</h4>
                <h4 v-if="myan" class="mb-3">စတင်လေ့လာရန် အကောင့်ဝင်ပါ။</h4>
                <div v-if="userStatus" class="alert alert-warning alert-dismissible fade show" role="alert">
                  <span v-if="eng">{{ userStatus }}</span>
                  <span v-if="myan">အထောက်အထား မကိုက်ညီပါ။</span>
                </div>
                <div class="row">
                  <label v-if="eng">Email</label>
                  <label v-if="myan">အီးမေးလ်</label>
                  <input type="email" v-model="userData.email" class="form-control"  placeholder="Enter Email..."/>
                  <small v-if="status.emailCheck" class="text-danger">
                    <span v-if="eng">Email must be fill</span>
                    <span v-if="myan">အီးမေးလ် ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class="my-3 row">
                  <label v-if="eng">Password</label>
                  <label v-if="myan">စကားဝှက်</label>
                  <input type="password" v-model="userData.password" class="form-control" placeholder="Enter Password..."/>
                  <small v-if="status.passCheck" class="text-danger">
                    <span v-if="eng">Password must be fill</span>
                    <span v-if="myan">စကားဝှက် ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class="mt-5 d-flex align-items-center justify-content-center">
                    <button type="submit" @click="accountLogin" class="btn-success rounded btn-block p-2 ">
                        <span v-if="eng">LOGIN</span>
                         <span v-if="myan">လော့ဂ်အင်</span>
                    </button>
                </div>
                <p class="my-3" v-if="eng">or</p>
                <p class="my-3" v-if="myan">( သို့မဟုတ် )</p>
                <div v-if="eng" class="d-flex align-items-center justify-content-center">
                    <a class="">Don't you have account?</a>
                    <a class="text-danger" href="/register"> Sign Up Here</a>
                </div>
                <div v-if="myan" class="d-flex align-items-center justify-content-center">
                    <a class="">မင်းမှာအကောင့်မရှိဘူးလား?</a>
                    <a class="text-danger" href="/register">ဤနေရာတွင် စာရင်းသွင်းပါ</a>
                </div>
            </div>
          </div>
       </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapGetters } from "vuex";
    export default {
    name: "loginPage",
        data () {
            return {
                userData : {
                    email : '',
                    password : '',
                },
                userStatus : '',
                status : {
                    emailCheck : false,
                    passCheck : false
                },
                eng: true,
                myan: false,
                 dark : false,
        light : true,
        modeDL: false,
            }
        },
        computed: {
            ...mapGetters(['setToken','setUserData'])
    },
       
    methods: {
              register (){
                this.$router.push({
                    name : 'register'
                })
            },
            home () {
                this.$router.push({
                    name: "home"
                })
        },
             darkMode(){
        localStorage.removeItem('mode');
        this.light = true;
        this.dark = false;
        this.modeDL = false;
      },
      lightMode(){
        localStorage.setItem('mode',true);
        this.dark = true;
        this.light = false;
        this.modeDL = true;
      },
            emailValidation(){
               if(!this.userData.email){
                this.status.emailCheck = true
               }else {
                this.status.emailCheck = false
               }
            },
            passwordValidation(){
                if(!this.userData.password){
                    this.status.passCheck = true
                }else {
                    this.status.passCheck = false
                }
        },
            engLan(){
        localStorage.removeItem('language');
        this.eng = true;
        this.myan = false;
      },
      myanLan(){
        localStorage.setItem('language',true);
        this.eng = false;
        this.myan = true;
      },
            accountLogin(){
                this.emailValidation();
                this.passwordValidation();
                if(Object.values(this.status).every(check => !check)){
                    axios.post("http://localhost:8000/api/login", this.userData).then((response) => {
                        
                    if(response.data.token != null){
                            localStorage.setItem('dataKey', response.data.user.student_id)
                            this.$store.dispatch('setToken',response.data.token)
                            this.$store.dispatch('setUserData',response.data.user.id)
                            this.home()
                    }else{
                        this.userStatus = response.data.failed;
                    }
                })
                }
            }
        },
        mounted () {
             if(localStorage.getItem('mode') === 'true'){
        this.dark = true;
        this.light = false;
        this.modeDL = true;
        }
      if(localStorage.getItem('language') === 'true'){
        this.myan = true;
        this.eng = false;
      }
        }
    }
</script>

<style scoped>
.bgImg {
    background-image : url('../assets/reading.jpg');
    height: 100vh;
    background-position :center;
}
</style>
