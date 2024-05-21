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
     <div>
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
      <div class="row bg-secondary p-2">
        <a href="#"  @click="start(category.id)" 
          v-for="(category, index) in categoriesBar" :key="index"
          class=" nav-link"><h5 class="text-white">{{ category.title }}</h5>
        </a>
      </div>
      <div class="p-5 ">
        <div class="my-5 p-5">
          <h1 :class="{' text-white'  : modeDL }">CodeLab</h1>
          <h3 :class="{' text-white'  : modeDL }" v-if="eng" class="my-3">We Learn , We Share , We Code</h3>
          <h3 :class="{' text-white'  : modeDL }" v-if="myan" class="my-3">ကျွန်ုပ်တို့လေ့လာ ၊ ကျွန်ုပ်တို့မျှဝေ၊ ကျွန်ုပ်တို့ကုဒ်</h3>
          <p :class="{' text-white'  : modeDL }" v-if="eng">This Laboratory is for all coders</p>
          <p :class="{' text-white'  : modeDL }" v-if="myan">ဤဓာတ်ခွဲခန်းသည် coders အားလုံးအတွက်ဖြစ်သည်။</p>
          <div class="my-5 row">
            <input type="text" @keyup.enter="searchCategory()" v-model="searchKey" class="form-control col-6 offset-3" placeholder="Search Courses...."/>
            <button type="submit" class="btn-success roundeds" @click="searchCategory">
              <i class="fa-solid fa-magnifying-glass mx-1"></i>
            </button>
          </div>
          <div class="my-3 p-5" v-for="(category,index) in categories" :key="index">
            <h1 class="" :class="{'text-white': modeDL , 'text-dark' : !modeDL}">{{ category.title }}</h1>
            <h5 class="" :class="{'text-white': modeDL , 'text-dark' : !modeDL}">{{ category.description }}</h5>
            <button @click="start(category.id)" type="submit" class="rounded btn-block col-2 offset-5 mt-3 btn-primary p-2 mt-2">
              <span v-if="myan">စတင်ပါ</span><span v-if="eng">Start</span><i class="fa-solid fa-angles-right col-1"></i>
            </button>
          </div>
        </div>
      </div>
     </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default{
    name : 'homePage',
    data () {
      return {
        categories: [],
        categoriesBar : [],
        dark : false,
        light : true,
        modeDL : false,
        searchKey: '',
        user: [],
        eng: true,
        myan: false,
      }
  },
    computed: {
      ...mapGetters(['getToken', 'getUser']),
    },
    methods: {
      getCategoryBar () {
        axios.get("http://localhost:8000/api/category").then((response) => {
         this.categoriesBar = response.data
        })
      },
       getAuthUser() {
        let localId = JSON.parse(localStorage.getItem('dataKey'));
        axios.post("http://localhost:8000/api/user",{ id:localId }).then((response) => {
          this.user = response.data.user
        })
      },
      getCategory () {
        axios.get("http://localhost:8000/api/category").then((response) => {
         this.categories = response.data
        })
      },
      logout(){
        localStorage.removeItem('dataKey');
        this.$router.push('/')
      },
      inboxPage(){
        this.$router.push('/inbox')
      },
      profilePage() {
        this.$router.push('/profile')
      },
      examPage() {
        this.$router.push('/quiz')
      },
      chatPage() {
        this.$router.push('/chat')
      },
      groupChatPage() {
        this.$router.push('/groupChat')
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
      searchCategory(){
        let search = {
          key : this.searchKey
        }
          axios.post("http://localhost:8000/api/searchCategory", search).then((response) => {
          this.categories = response.data
        })
      },
      start(id){
        this.$router.push({
          name : 'Details',
          query : {
            id: id
          }
        })
      }
    },
  mounted() {
    this.getAuthUser();
      this.getCategory();
      this.getCategoryBar();
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
