<template>
    <div :class="{' bg-dark'  : modeDL }" class="position-relative">
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
     <div class="pb-5">
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
      <div class="d-flex flex-start my-2 col-10 offset-1">
        <button type="submit" @click="quizPage" class="btn-success rounded p-2">
            <i class="fa-solid fa-chevron-left me-2"></i><span v-if="eng">Back</span><span v-if="myan">နောက်သို့</span>
        </button>
      </div>
        <div class="col-8 offset-2">
            <div v-if="currentQuestion">
               <div class="p-3">
                  <h1 :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Question {{ currentIndex+1 }} of {{ quizes.length }}</h1>
               </div>
               <div class="">
                  <h2 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">{{ currentQuestion.question }}</h2>
               </div>
               <div class="my-2">
                  <p class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Choose one of the following questions</p>
               </div>
               <div class="">
                <li v-for="(options,index) in currentQuestion.option" :key="index">
                  <h4  class="btn-secondary my-3 p-3" @click="selectOption(options,currentQuestion.correct_option)">
                   {{ options }}
                  </h4>
                </li>
               </div>
            </div>
            <div v-else>
                <div class="">
                    <div class="p-3" v-if="eng">
                        <h1 :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}" class="">Congratulation!</h1>
                        <p :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">You have completed quiz</p>
                    </div>
                    <div class="p-3" v-if="myan">
                        <h1 :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}" class="">ဂုဏ်ယူပါတယ်!</h1>
                        <p :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">သင်သည် ပဟေဋ္ဌိ ပြီးသွားပါပြီ</p>
                    </div>
                     <h4 v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}" class="">Your Score : {{ score }} / {{ quizes.length }}</h4>
                    <h4 v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}" class="">သင့်ရမှတ် : {{ score }} / {{ quizes.length }}</h4>
                    <div class="m-3" v-if="eng">
                        <button type="submit" @click="backQuiz" class="btn-danger p-2 rounded m-3">Back</button>
                        <button type="submit"  @click="finishQuiz" class="btn-danger p-2 rounded">Finished</button>
                    </div>
                    <div class="m-3" v-if="myan">
                        <button type="submit" @click="backQuiz" class="btn-danger p-2 rounded m-3">နောက်သို့</button>
                        <button type="submit"  @click="finishQuiz" class="btn-danger p-2 rounded">ပြီးပြီ</button>
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
    name : 'detailPage',
    data () {
      return {
          dark : false,
          light : true,
          modeDL: false,
          quizes: [],
          currentIndex: 0,
          score: 0,
        user: [],
         eng: true,
        myan: false,
      }
    },
    computed: {
        currentQuestion () {
            return this.quizes[this.currentIndex]
        },
        ...mapGetters(['getToken', 'getUser'])
    },
    methods: {
        getQuiz() {
            axios.get("http://localhost:8000/api/quiz", ).then((response) => {
                this.quizes = response.data.quiz
        })
        },
         getAuthUser() {
           let localId = JSON.parse(localStorage.getItem('dataKey'));
           axios.post("http://localhost:8000/api/user",{ id:localId }).then((response) => {
           this.user = response.data.user
        })
      },
        selectOption(options,answer) {
            if(options === answer) {
              this.score++
          }
            this.currentIndex++
          console.log(options)
          console.log(answer)            
        },
        backQuiz() {
            this.currentIndex = 0
        this.score = 0
        },
        finishQuiz() {
             let localId = JSON.parse(localStorage.getItem('dataKey'));
            axios.post("http://localhost:8000/api/quizScore", { id : localId , score : this.score}).then((response) => {
                this.quizPage()
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
      logout(){
        localStorage.removeItem('dataKey');
        this.$router.push('/')
      },
      homePage() {
        this.$router.push('/home')
        },
      quizPage() {
        this.$router.push('/quiz')
      },
        inboxPage() {
        this.$router.push('/inbox')
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
      }
    },
    mounted() {
        this.getAuthUser();
      this.getQuiz()
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

<style >

</style>
