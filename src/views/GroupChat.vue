<template>
  <div>
    <div class="position-relative" :class="{' bg-dark'  : modeDL }">
       <div v-if="user == null" class="position-absolute d-flex justify-content-center align-items-center" style="top: 50%; left: 50%; transform: translate(-50%, -50%);; z-index: 3;">
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
        <div v-if="deleteStatus" class="position-absolute d-flex justify-content-center align-items-center" style="top: 50%; left: 50%; transform: translate(-50%, -50%);; z-index: 3;">
          <div class="modal-dialog modal-dialog-centered" role="document">
             <div class="modal-content p-3">
               <h5 class="">
                 Are you sure want to remove this message for?
               </h5>
               <div class="mt-4 d-flex justify-content-end align-items-center">
                 <button type="button" @click="cancelBtn" class="p-2 m-4 rounded btn-secondary">Cancel</button>
                 <button type="button" @click="yesBtn" class="p-2 rounded btn-danger">Yes</button>
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
        <div class="col-8 offset-2 pb-3">
           <div class="" >
                <div class="col-8 offset-2 rounded shadow-sm border p-2 d-flex justify-content-start align-items-center">
                   <img src="assets\img\codeLab Logo.jpg" class="rounded-circle mx-3" style="width: 50px;"/>
                   <h4 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Group Chat</h4>
                </div>
                <!-- chat area  -->
                <div class="py-2 col-8 offset-2" style="height: calc(500px);overflow-y: auto;">
                <div class="" v-if="user" >
                   <div class=""
                 v-for="(message,index) in message" :key="index">
                     <div v-if="message.user_id == user.id && message.user_name == user.name" class="" @click="deleteBtn(message.id)" >
                        <div class="d-flex justify-content-end align-items-center">
                           <div class="">
                             <p class="d-flex justify-content-end align-items-center">{{ message.user_name }}</p>
                              <p class="bg-primary p-3 rounded text-white">{{ message.message }}</p>
                           </div>
                            <img src="assets\img\profileMale.jpg" class="rounded-circle mx-4" style="width: 50px;">
                        </div>
                     </div>
                     <div v-if="message.user_id != user.id || message.user_name != user.name" class="" >
                        <div class="d-flex justify-content-start align-items-center">
                            <div class="">
                                <p class="d-flex justify-content-start align-items-center">{{ message.user_name }}</p>
                                <p class="bg-secondary p-3 rounded text-white">{{ message.message }}</p>
                            </div>
                        </div>
                     </div>
                 </div>
                </div>
                </div>
                <!-- chat area  -->
                <div class="d-flex col-10 offset-1 justify-content-center align-items-center">
                    <textarea cols="30" rows="4" v-model="sendMessage" placeholder="Text Message Here" class="form-control col-8"></textarea>
                    <div class="" :class="{'disabled' : sendMessage == null || sendMessage == ''}" @click="sendBtn" title="send" style="margin-left: 1rem;">
                        <i :class="{'bg-secondary' : sendMessage == null || sendMessage == ''}" class="fa-solid fa-paper-plane bg-primary p-3 rounded-circle text-white"></i>
                    </div>
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
    name : 'groupChatPage',
    data () {
      return {
        dark : false,
        light : true,
        modeDL : false,
          user: '',
          message : '',
          deleteStatus: false,
        sendMessage :'',
        messageId: '',
          deleteMessage: '',
        nullMessage: '',
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
      getMessage() {
        axios.get("http://localhost:8000/api/groupChat").then((response) => {
            this.message = response.data.message
        })
        },
        sendBtn() {
            if (!this.sendMessage) {
                this.nullMessage = true
            } else {
                axios.post("http://localhost:8000/api/sendMessage", {
                    id: this.user.id,
                    name : this.user.name,
                    message : this.sendMessage
            }).then((response) => {
                this.message = response.data.message
                this.sendMessage = ''
            this.getMessage()
        })
        }
      },
      cancelBtn() {
        this.deleteStatus = false
      },
      deleteBtn(id) {
        this.deleteStatus = true
          this.messageId = id
      },
      yesBtn() {
        axios.post("http://localhost:8000/api/deleteGroupChatMessage",{ id:this.messageId }).then((response) => {
          this.getMessage()
        })
        this.deleteStatus = false
      },
      logout(){
        localStorage.removeItem('dataKey');
        this.$router.push('/')
      },
      examPage() {
        this.$router.push('/quiz')
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
        this.getMessage();
      this.getAuthUser();
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
