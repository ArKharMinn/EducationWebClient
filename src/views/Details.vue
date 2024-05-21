<template>
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
      <div class="d-flex flex-start my-2 col-10 offset-1">
        <button type="submit" @click="homePage" class="btn-success rounded p-2">
            <i class="fa-solid fa-chevron-left me-2"></i>
            <span v-if="eng">Back</span>
            <span v-if="myan">နောက်သို့</span>
        </button>
      </div>
        <div class="row col-10 offset-1">
          <div class="col-4 p-5">
            <div class="" >
              <div class="" v-for="(lesson, index) in lessons" :key="index">
                <div class="mb-2 py-1 rounded d-flex flex-start col-12" :class="{'bg-success':lesson.title == clicked}">
                  <a href="#" class="" @click="detail(lesson.title)">
                    <h5 :class="{' text-white'  : modeDL }" >
                      <i class="fa-regular fa-square-check"></i>
                      {{ lesson.title }}
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="my-3" v-if="detailLesson.length > 0">
             <div class="my-3" v-for="(detail,index) in detailLesson" :key="index">
                <p :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">{{ detail.description }}</p>
                <div class="border bg-secondary p-3">
                  <h4 class="text-white mb-3">Example</h4>
                  <img class="col-10" v-bind:src=" 'http://localhost:8000/storage/'+ detail.image " alt="" />
              </div>
            </div>
            
            </div>
            <div class="my-5" v-else>
              <div class="" v-if="eng">
                <h1 :class="{' text-white'  : modeDL }">CodeLab</h1>
              <h3 :class="{' text-white'  : modeDL }" class="my-3">We Learn , We Share , We Code</h3>
              <h5 :class="{' text-white'  : modeDL }">This Laboratory is for all coders</h5>
              <p :class="{' text-white'  : modeDL }" class="mt-4">
               I hope this message finds you well. I'm reaching out to inform you about the absence of lesson details at the moment.

As you may know, our platform strives to provide comprehensive lesson information to enhance your learning experience. However, it seems that there are currently no lesson details available for display.
              </p>
              </div>

              <div class="" v-if="myan">
                <h1 :class="{' text-white'  : modeDL }">CodeLab</h1>
              <h3 :class="{' text-white'  : modeDL }" class="my-3">ကျွန်ုပ်တို့လေ့လာ ၊ ကျွန်ုပ်တို့မျှဝေ၊ ကျွန်ုပ်တို့ကုဒ်</h3>
              <h5 :class="{' text-white'  : modeDL }">ဤဓာတ်ခွဲခန်းသည် coders အားလုံးအတွက်ဖြစ်သည်။</h5>
              <p :class="{' text-white'  : modeDL }" class="mt-4">
              ဒီမက်ဆေ့ချ်က မင်းကို အဆင်ပြေမယ်လို့ မျှော်လင့်ပါတယ်။ လောလောဆယ်မှာ သင်ခန်းစာအသေးစိတ်တွေ မရှိသေးတာကို အသိပေးဖို့ ဆက်သွယ်နေပါတယ်။

သင်သိသည့်အတိုင်း၊ ကျွန်ုပ်တို့၏ပလက်ဖောင်းသည် သင်၏သင်ယူမှုအတွေ့အကြုံကို မြှင့်တင်ရန် ပြည့်စုံသောသင်ခန်းစာအချက်အလက်ကို ပံ့ပိုးပေးရန် ကြိုးပမ်းပါသည်။ သို့သော်လည်း လက်ရှိတွင် သင်ခန်းစာအသေးစိတ်ဖော်ပြရန် မရရှိနိုင်ဟု ထင်ရသည်။
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div> 
</template>

<script>
import axios from 'axios';
export default{
    name : 'detailPage',
    data () {
      return {
        lessons: [],
        dark : false,
        light : true,
        modeDL: false,
        clicked : '',
        detailLesson: [],
        user: [],
         eng: true,
        myan: false,
      }
    },
    methods: {
        getLesson(id) {
        axios.post("http://localhost:8000/api/details",{id}).then((response) => {
          this.lessons = response.data.lesson
        })
      },
       getAuthUser() {
        let localId = JSON.parse(localStorage.getItem('dataKey'));
        axios.post("http://localhost:8000/api/user",{ id:localId }).then((response) => {
         this.user = response.data.user
        })
      },
      detail(title) {
        axios.post("http://localhost:8000/api/getDetails",{title}).then((response) => {
          this.detailLesson = response.data
          this.clicked = title
        })
      },
      logout(){
        localStorage.removeItem('dataKey');
        this.$router.push('/')
      },
      homePage() {
        this.$router.push('/home')
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
    this.getAuthUser();
    let id = this.$route.query.id
    this.getLesson(id);
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
