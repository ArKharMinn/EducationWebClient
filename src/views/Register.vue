<template>
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
                       <button class="btn-success rounded p-2" @click="login">
                         <span class="mx-3" v-if="eng">Login</span>
                         <span class="mx-3" v-if="myan">လော့ဂ်အင်</span>
                       </button>
                     </li>
                   </ul>
                 </div>
               </div>
           </nav>
         </div>
         </div>
    <div class="bgImg">
          <div class="py-3 ">
            <div class="col-4 offset-4 p-5 bg-white rounded shadow-sm">
                <h4 v-if="eng" class="mb-3">Create Account</h4>
                <h4 v-if="myan" class="mb-3">အကောင့်ပြုလုပ်ပါ</h4>
                <div class="row">
                  <label v-if="eng">Name</label>
                  <label v-if="myan">နာမည်</label>
                  <input type="text" v-model="user.name" name="" class="form-control" placeholder="Enter Name..."/>
                  <small v-if="check.nameCk" class="text-danger">
                    <span v-if="eng">Name must be fill</span>
                    <span v-if="myan">နာမည် ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class="row my-3">
                  <label v-if="eng">Email</label>
                  <label v-if="myan">အီးမေးလ်</label>
                  <input type="email" v-model="user.email" name="email" class="form-control" placeholder="Enter Email..."/>
                  <small v-if="check.emailCk" class="text-danger">
                    <span v-if="eng">Email must be fill</span>
                    <span v-if="myan">အီးမေးလ် ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class=" row">
                  <label v-if="eng">Phone</label>
                  <label v-if="myan">ဖုန်း</label>
                  <input type="phone" v-model="user.phone" name="phone" class="form-control" placeholder="Enter Phone..."/>
                  <small v-if="check.phoneCk" class="text-danger">
                    <span v-if="eng">Phone must be fill</span>
                    <span v-if="myan">ဖုန်း ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class="my-3 row">
                  <label v-if="eng">Address</label>
                  <label v-if="myan">လိပ်စာ</label>
                  <input type="text" v-model="user.address" name="address" class="form-control" placeholder="Enter Address..."/>
                  <small v-if="check.addressCk" class="text-danger">
                    <span v-if="eng">Address must be fill</span>
                    <span v-if="myan">လိပ်စာ ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class=" row">
                  <div class="">
                    <input type="radio" v-model="user.gender" value="male" name="gender" class="me-2"/> <span v-if="eng">Male</span><span v-if="myan">အမျိုးသား</span>
                    <input type="radio" v-model="user.gender" value="female" name="gender" class="m-2"/> <span v-if="eng">Female</span><span v-if="myan">အမျိုးသမီး</span>
                    <small v-if="check.genderCk" class="text-danger d-block">
                        <span v-if="eng">Gender must be fill</span>
                        <span v-if="myan">ကျား၊မ ဖြည့်ပေးရပါမယ်</span>
                    </small>
                  </div>
                </div>
                <div class="my-3 row">
                  <label v-if="eng">Password</label>
                  <label v-if="myan">စကားဝှက်</label>
                  <input type="password" v-model="user.password" name="password" class="form-control" placeholder="Enter Password..."/>
                  <small v-if="check.passwordCk" class="text-danger">
                    <span v-if="eng">Password must be fill</span>
                    <span v-if="myan">စကားဝှက် ဖြည့်ပေးရပါမယ်</span>
                  </small>
                </div>
                <div class=" row">
                  <label v-if="eng">Confirm Password</label>
                  <label v-if="myan">စကားဝှက်အတည်ပြုခြင်း</label>
                  <input type="password" v-model="user.confirmPassword" name="confirmPassword" class="form-control" placeholder="Enter Confirm Password..."/>
                  <small v-if="check.conPasswordCk" class="text-danger">
                    <span v-if="eng">Confirm Password must be fill</span>
                    <span v-if="myan">စကားဝှက်အတည်ပြုခြင်း ဖြည့်ပေးရပါမယ်</span>
                  </small>
                  <small v-if="check.samePassword" class="text-danger">
                     <span v-if="eng">Confirm Password must be same with Password</span>
                    <span v-if="myan">အတည်ပြုစကားဝှက် နှင့် စကားဝှက်အသစ်သည် တူညီရပါမည်</span>
                  </small>
                </div>
                <div class="mt-4">
                    <div class="">
                        <button type="submit" @click="signupBtn" class="btn-info btn-block p-2 btn-block rounded">
                            <span v-if="eng">Sign up</span>
                            <span v-if="myan">ဆိုင်းအပ်</span>
                        </button>
                    </div>
                </div>
                <p class="my-2">or</p>
                <div class=" d-flex align-items-center justify-content-center">
                    <div class="" v-if="eng">
                        <span class="me-2">Already have account?</span>
                        <router-link to="/" class="text-danger">Sign in</router-link>                  
                    </div>
                    <div class="" v-if="myan">
                        <span class="me-2">အကောင့်ရှိပြီးသားလား?</span>
                        <router-link to="/" class="text-danger">ဆိုင်းအင်လုပ်ခြင်း</router-link>                  
                    </div>
                </div>
            </div>
          </div>
  </div>
</template>

<script>
import axios from 'axios';
 export default {
    name : 'registerPage',
    data () {
      return {
        user: {
            name : '',
            email : '',
            phone : '',
            address : '',
            gender : '',
            password : '',
            confirmPassword : ''
        },
        check : {
            nameCk : false,
            emailCk : false,
            phoneCk : false,
            addressCk : false,
            genderCk : false,
            passwordCk : false,
            conPasswordCk : false,
            samePassword : false,
          },
         eng: true,
                myan: false,
                 dark : false,
        light : true,
        modeDL: false,
      }
    },
    methods: {
        nameCheck(){
            if(!this.user.name){
                this.check.nameCk = true
            } else {
                this.check.nameCk = false
            }
        },
         login (){
                this.$router.push({
                    name : 'login'
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
        emailCheck(){
            if(!this.user.email){
                this.check.emailCk = true
            } else {
                this.check.emailCk = false
            }
        },
        phoneCheck(){
            if(!this.user.phone){
                this.check.phoneCk = true
            } else {
                this.check.phoneCk = false
            }
        },
        addressCheck(){
            if(!this.user.address){
                this.check.addressCk = true
            } else {
                this.check.addressCk = false
            }
        },
        genderCheck(){
            if(!this.user.gender){
                this.check.genderCk = true
            } else {
                this.check.genderCk = false
            }
        },
        passwordCheck(){
            if(!this.user.password){
                this.check.passwordCk = true
            } else {
                this.check.passwordCk = false
            }
        },
        confirmPasswordCheck(){
            if(!this.user.confirmPassword){
                this.check.conPasswordCk = true
            } else {
                this.check.conPasswordCk = false
            }
        },
        samePass(){
            if(this.user.password != this.user.confirmPassword){
                this.check.samePassword = true
            }else {
                this.check.samePassword = false
            }
        },
        home () {
                this.$router.push({
                    name: "home"
                })
        },
        signupBtn(){
            this.nameCheck(),
            this.emailCheck(),
            this.phoneCheck(),
            this.addressCheck(),
            this.genderCheck(),
            this.passwordCheck(),
            this.confirmPasswordCheck();
            this.samePass();
            if (Object.values(this.check).every(check => !check)){
                
                axios.post("http://localhost:8000/api/register", this.user).then((response) => {
                    localStorage.setItem('dataKey',response.data.user.student_id)
                    this.$store.dispatch('setToken',response.data.token)
                    this.$store.dispatch('setUserData',response.data.user)
                    this.home();
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