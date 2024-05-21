<template>
  <div>
    <div class="position-relative" v-if="user" :class="{' bg-dark'  : modeDL }">
       <div v-if="!user" class="position-absolute d-flex justify-content-center align-items-center" style="top: 50%; left: 50%; transform: translate(-50%, -50%);; z-index: 3;">
          <div class="modal-dialog modal-dialog-centered" role="document">
             <div class="modal-content p-3">
               <div class="">
                 <h5 class="mb-3" id="">Session Expired</h5>
               </div>
               <div class="">
                 Your session has expired. Please log in again.
               </div>
               <div class="mt-3">
                 <button type="button" @click="logout" class="px-2 rounded btn-danger">Logout</button>
               </div>
             </div>
           </div>
        </div>
     <div >
    <div class="p-4 d-flex justify-content-between align-items-center" style="position: sticky;top: 0;">
        <div class="d-flex justify-content-start align-items-center">
           <nav class=" navbar navbar-expand-lg sticky-top ">
              <div class="container">
                 <a class="navbar-brand fw-bold" :class="{'text-white'  : modeDL , 'text-dark' : !modeDL}" href="#">CodeLab</a>
                 <div class="collapse navbar-collapse" id="">
                   <ul class="navbar-nav" >
                     <li class="nav-item p-1">
                       <a class="nav-link fw-semibold" v-if="eng" :class="{'bg-primary rounded' : this.$route.path == '/home','text-white'  : modeDL , 'text-dark' : !modeDL}" href="/home">Home</a>
                       <a class="nav-link fw-semibold" v-if="myan" :class="{'bg-primary rounded' : this.$route.path == '/home','text-white'  : modeDL , 'text-dark' : !modeDL}" href="/home">အိမ်</a>
                     </li>
                     <li class="nav-item p-1">
                       <a class="nav-link fw-semibold" v-if="eng" :class="{'bg-primary rounded' : this.$route.path == '/quiz',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/quiz">Quiz</a>
                       <a class="nav-link fw-semibold" v-if="myan" :class="{'bg-primary rounded' : this.$route.path == '/quiz',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/quiz">ပဟေဠိ</a>
                     </li>
                     <li class="nav-item p-1">
                       <a class="nav-link  fw-semibold" v-if="eng" :class="{'bg-primary rounded' : this.$route.path == '/chat',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/chat">Contact</a>
                       <a class="nav-link  fw-semibold" v-if="myan" :class="{'bg-primary rounded' : this.$route.path == '/chat',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/chat">ဆက်သွယ်ရန်</a>
                     </li>
                     <li class="nav-item p-1">
                       <a class="nav-link  fw-semibold" v-if="eng" :class="{'bg-primary rounded' : this.$route.path == '/groupChat',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/groupChat">Group Chat</a>
                       <a class="nav-link  fw-semibold" v-if="myan" :class="{'bg-primary rounded' : this.$route.path == '/groupChat',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/groupChat">အဖွဲ့စကားပြောခန်း</a>
                     </li>
                   </ul>
                 </div>
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
                       <a class="nav-link fw-semibold fs-5" href="/inbox">
                        <h3 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
                          <i class="fa-solid fa-bell "></i>
                        </h3>
                       </a>
                     </li>
                     <li class="nav-item p-1" v-if="user">
                       <a class="nav-link fw-semibold" :class="{'bg-primary rounded' : this.$route.path == '/profile',' text-white'  : modeDL , 'text-dark' : !modeDL}" href="/profile">{{ user.name }}</a>
                     </li>
                     <li class="nav-item p-1">
                      <div class="">
                        <a href="#" class="nav-link fw-semibold" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}" v-if="dark" @click="darkMode">
                          <span class="material-symbols-outlined">dark_mode</span>
                        </a>
                        <a href="#" class="nav-link fw-semibold" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}" v-if="light" @click="lightMode">
                          <span class="material-symbols-outlined" >light_mode</span>
                        </a>
                      </div>
                     </li>
                     <li class="nav-item p-1">
                       <button class="btn-danger rounded p-2" @click="logout">
                         <span class="mx-3" v-if="eng">Logout</span>
                         <span class="mx-3" v-if="myan">ထွက်ရန်</span>
                       </button>
                     </li>
                   </ul>
                 </div>
               </div>
           </nav>
         </div>
      </div>
      <!-- profile -->
      <div class="row col-8 offset-2">
        <div class="col-8 py-3">
        <div v-if="updateStatus" class="alert alert-warning alert-dismissible fade show pb-3" role="alert">
           <strong v-if="eng">{{ updateStatus }}</strong>
           <strong v-if="myan">ပရိုဖိုင်ကို အောင်မြင်စွာ မွမ်းမံပြီးပါပြီ။</strong>
        </div>
        <div class="justify-content-start align-items-center d-flex px-4">
            <img v-if="user.image" v-bind:src=" 'http://localhost:8000/storage/'+ user.image"
            class="rounded-circle mx-4" style="width: 100px;"/>
            <img v-else src="assets\img\proFileMale.jpg" class="rounded-circle mx-4" style="width: 100px;">
            <div class="px-5">
                <h4 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
                    {{ user.name }}
                </h4>
                <h5 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">{{ user.address }}</h5>
            </div>
        </div>
         <div class="mt-3">
             <div class="col-6">
               <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Name</label>
               <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">နာမည်</label>
               <input type="text" v-model="user.name" class="form-control"/>
             </div>
             <div class="justify-content-start my-3 align-items-center d-flex">
                <div class="col-6">
                    <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Email</label>
                    <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">အီးမေးလ်</label>
                    <input type="text" v-model="user.email" class="form-control"/>
                </div>
                <div class="col-6">
                   <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Phone</label>
                   <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">ဖုန်း</label>
                   <input type="text" v-model="user.phone" class="form-control"/>
                </div>
             </div>
             <div class="justify-content-start my-3 align-items-center d-flex">
                <div class="col-6">
                    <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Address</label>
                    <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">လိပ်စာ</label>
                    <input type="text" v-model="user.address" class="form-control"/>
                </div>
                <div class="col-6">
                    <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Gender</label>
                    <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">လိင်</label>
                    <div class="justify-content-start align-items-center d-flex">
                        <div class="">
                            <input type="radio" value="male" :checked="user.gender === 'male'" v-model="user.gender" name="gender" class=""/>
                            <span class="col-2" v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Male</span>
                            <span class="col-2" v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">အမျိုးသား</span>
                            <input type="radio" value="female" :checked="user.gender === 'female'" v-model="user.gender" name="gender" class=""/>
                            <span class="col-2"  v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Female</span>
                            <span class="col-2"  v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">အမျိုးသမီး</span>
                        </div>
                    </div>
                </div>
             </div>
             <div class="col-6 pt-3 ">
                  <button type="submit" @click="saveChanges" class="btn-warning btn-block mt-3 p-2 rounded">
                    <span v-if="eng">Save Changes</span>
                    <span v-if="myan">အပြောင်းအလဲများကို သိမ်းဆည်းပါ။</span>
                  </button>
             </div>
         </div>
        </div>
        <div class="col-4">
            <div v-if="changePass" class="alert alert-warning alert-dismissible fade show pb-3" role="alert">
               <strong v-if="eng">{{ changePass }}</strong>
               <strong v-if="myan">စကားဝှက်ကို အောင်မြင်စွာ ပြောင်းလဲခဲ့သည်</strong>
            </div>
            <h3 v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Change Password</h3>
            <h3 v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">စကားဝှက်ကိုပြောင်းရန်</h3>
            <div class="my-3">
                <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Old Password</label>
                <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">စကားဝှက်အဟောင်း</label>
                <input type="password" v-model="password.oldPassword" class="form-control"/>
                <small v-if="checkPass.oldPasswordStatus" class="text-danger">
                  <span v-if="eng">Old Password must be fill</span>
                  <span v-if="myan">စကားဝှက် အဟောင်းကို ဖြည့်ပေးရပါမယ်</span>
                </small>
                <small v-if="notEqual" class="text-danger">
                  <span v-if="eng">{{ notEqual }}</span>
                  <span v-if="myan">အထောက်အထား မကိုက်ညီပါ။</span>
                </small>
            </div>
            <div class="">
                <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">New Password</label>
                <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">စကားဝှက်အသစ်</label>
                <input type="password" v-model="password.newPassword" class="form-control"/>
                <small v-if="checkPass.newPasswordStatus" class="text-danger">
                  <span v-if="eng">New Password must be fill</span>
                  <span v-if="myan">စကားဝှက် အသစ် ဖြည့်ပေးရပါမယ်</span>
                </small>
            </div>
            <div class="mt-3">
                <label for="" v-if="eng" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Confirm Password</label>
                <label for="" v-if="myan" class="justify-content-start align-items-center d-flex" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">စကားဝှက်အတည်ပြုခြင်း</label>
                <input type="password" v-model="password.confirmPassword" class="form-control"/>
                <small v-if="checkPass.newPasswordStatus" class="text-danger">
                  <span v-if="eng">Confirm Password must be fill</span>
                  <span v-if="myan">အတည်ပြုစကားဝှက် ဖြည့်ပေးရပါမယ်</span>
                </small>
                <small v-if="checkPass.samePasswordStatus" class="text-danger">
                  <span v-if="eng">Confirm Password and New Password must be same</span>
                  <span v-if="myan">အတည်ပြုစကားဝှက် နှင့် စကားဝှက်အသစ်သည် တူညီရပါမည်</span>
                </small>
            </div>
            <div class="mx-2">
            <div class="pt-3 ">
                  <button type="submit" @click="changePassword" class="btn-success btn-block mt-3 p-2 rounded">
                    <span v-if="eng">Change</span>
                    <span v-if="myan">ပြောင်းလဲပါ</span>
                  </button>
             </div>
          </div>
        </div>
      </div>
      <!-- profile end  -->
     </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default{
    name : 'profilePage',
    data () {
      return {
        dark : false,
        light : true,
        modeDL : false,
          user: [],
          updateStatus: '',
          password: {
              oldPassword: '',
              newPassword: '',
            confirmPassword : ''
          },
          changePass: '',
          checkPass: {
            oldPasswordStatus: false,
            newPasswordStatus: false,
            conPasswordStatus: false,
            samePasswordStatus : false
          },
        notEqual: '',
         eng: true,
        myan: false,
      }
  },
    computed: {
      ...mapGetters(['getToken','getUser'])
    },
    methods: {
       getAuthUser() {
        let localId = JSON.parse(localStorage.getItem('dataKey'));
        axios.post("http://localhost:8000/api/user",{ id:localId }).then((response) => {
          this.user = response.data.user
        })
      },
       inboxPage() {
        this.$router.push('/inbox')
      },
        saveChanges() {
        axios.post("http://localhost:8000/api/changeProfile",this.user).then((response) => {
            this.user = response.data.user
            this.updateStatus = response.data.update
            this.getAuthUser()
        })
        },
        oldPass() {
            if(!this.password.oldPassword){
                this.checkPass.oldPasswordStatus = true
            } else {
                this.checkPass.oldPasswordStatus = false
            }
        },
        newPass() {
            if(!this.password.newPassword){
                this.checkPass.newPasswordStatus = true
            } else {
                this.checkPass.newPasswordStatus = false
            }
        },
        conPass() {
            if(!this.password.confirmPassword){
                this.checkPass.conPasswordStatus = true
            } else {
                this.checkPass.conPasswordStatus = false
            }
        },
        samePass() {
            if(this.password.newPassword != this.password.confirmPassword){
                this.checkPass.samePasswordStatus = true
            } else {
                this.checkPass.samePasswordStatus = false
            }
        },
        changePassword() {
            this.oldPass()
            this.newPass()
            this.conPass()
            this.samePass()
            if (Object.values(this.checkPass).every(check => !check)) {
                let localId = JSON.parse(localStorage.getItem('dataKey'));
            axios.post("http://localhost:8000/api/changePassword", {
                id: localId,
                oldPassword: this.password.oldPassword,
                newPassword : this.password.newPassword
        }).then((response) => {
            this.changePass = response.data.password;
            this.notEqual = response.data.failed;
            this.getAuthUser();
            this.password.oldPassword = ''
            this.password.newPassword = ''
            this.password.confirmPassword = ''
        })
            }
      },
      logout(){
        localStorage.removeItem('dataKey');
        this.$router.push('/')
      },
      examPage() {
        this.$router.push('/quiz')
      },
      chatPage() {
        this.$router.push('/chat')
        },
       homePage() {
        this.$router.push('/home')
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
    },
  mounted() {
    this.getAuthUser()
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

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>
