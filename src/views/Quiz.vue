<template>
    <div>
         <div class="position-relative" :class="{' bg-dark'  : modeDL }">
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
      <div class="row p-5 ">
         <div class="col-8 offset-2">
            <h1 class="" v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
             Test Your Skill With Quizzes
            </h1>
            <h1 class="" v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
             ဉာဏ်စမ်းများဖြင့် သင်၏အရည်အချင်းကို စမ်းသပ်ပါ
            </h1>
            <p class="mt-2" v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
             You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed.
            </p>
            <p class="mt-2" v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
            အဖြေမှန်တိုင်းအတွက် 1 မှတ် ရရှိပါမည် ဉာဏ်စမ်း ၏အဆုံးတွင်၊ သင်၏စုစုပေါင်းရမှတ်ကိုပြသလိမ့်မည်
            </p>
            <p class="" v-if="eng">
              Good Luck!
            </p>
            <p class="" v-if="myan">
              ကံကောင်းပါစေ!
            </p>
         </div>
      </div>
      <div class="p-5" >
        <h3 class="" v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
            Quiz Test
        </h3>
         <h3 class="" v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">
            ပဟေဠိစမ်းသပ်မှု
        </h3>
        <p class="my-3" v-if="eng" >Test your Code skills with quiz.</p>
        <p class="my-3" v-if="myan" >သင်၏ Code စွမ်းရည်ကို ပဟေဋ္ဌိဖြင့် စမ်းသပ်ပါ</p>
        <div class="">
            <button type="submit" @click="answer()" class="btn-block p-3 rounded col-4 offset-4 btn-primary">
              <span v-if="eng">Start Quiz</span>
              <span v-if="myan">ပဟေဋ္ဌိကိုစတင်ပါ။</span>
            </button>
        </div>
      </div>
      
     </div>
    </div> 
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name : 'examPage',
    data () {
      return {
        categories: [],
        dark : false,
        light : true,
        modeDL : false,
        searchKey: '',
        user: [],
          eng: true,
        myan: false,
      }
    },
    methods: {
      getCategory () {
        axios.get("http://localhost:8000/api/category").then((response) => {
         this.categories = response.data
        })
      },
      getAuthUser() {
        let localId = JSON.parse(localStorage.getItem('dataKey'));
        axios.post("http://localhost:8000/api/user",{ id:localId }).then((response) => {
         this.user = response.data.user
        })
      },
       inboxPage() {
        this.$router.push('/inbox')
      },
      logout(){
        localStorage.removeItem('dataKey');
        this.$router.push('/')
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
      start(id){
        this.$router.push({
          name : 'Details',
          query : {
            id: id
          }
        })
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
      answer() {
        this.$router.push('/answer')
      }
    },
  mounted() {
    this.getAuthUser()
      this.getCategory();
      if(localStorage.getItem('mode') === 'true'){
        this.dark = true
        this.light = false
        this.modeDL = true
    }
      if(localStorage.getItem('language') === 'true'){
        this.myan = true;
        this.eng = false;
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>
