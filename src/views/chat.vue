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
        <div class="row p-3">
          <div class="col-3 ">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start align-items-center">
                <h4><i class="fa-solid mx-3 fa-envelope-open-text" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}"></i></h4>
                <h5 class="" v-if="eng" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">Chats</h5>
                <h5 class="" v-if="myan" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">ချက်တင်များ</h5>
              </div>
              </div>
              <div class="mt-4" style="height: calc(500px);overflow-y: auto;">
                <div class="p-2 my-2">
                  <input type="text" v-model="search" class="form-control" @keyup.enter="searchChat" placeholder="Search Name..." />
                 </div>
                  <div class="" v-for="(teacher,index) in teacher" :key="index">
                    <div class="d-flex p-2 justify-content-start align-items-center" :class="{'bg-primary rounded' : chatBg == teacher.teacher_id}" @click="chatTeacher(teacher.teacher_id,teacher.id)">
                      <div class="">
                        <img v-if="teacher.image" v-bind:src=" 'http://localhost:8000/storage/'+ teacher.image"
                         class="rounded-circle mx-4" style="width: 50px;"/>
                        <img v-else src="assets\img\codeLab Logo.jpg" class="rounded-circle mx-4" style="width: 50px;">
                      </div>
                      <div class="">
                        <h5 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">{{ teacher.name }}</h5>
                      </div>   
                    </div>
                  </div>
              </div>
          </div>
           <div class="col-8 " >
            <!-- conservation -->
              <div class="" v-if="getTeacher.length != 0">
                <div class="d-flex justify-content-between align-items-center" v-for="(getTeacher,index) in getTeacher" :key="index">
                  <div class="row">
                     <div class="d-flex justify-content-start align-items-center" >
                      <div class="">
                        <img v-if="teacher.image" v-bind:src=" 'http://localhost:8000/storage/'+ getTeacher.image"
                         class="rounded-circle mx-4" style="width: 50px;"/>
                        <img v-else src="assets\img\codeLab Logo.jpg" class="rounded-circle mx-4" style="width: 50px;">
                      </div>
                      <div class="">
                        <h5 class="" :class="{' text-white'  : modeDL , 'text-dark' : !modeDL}">{{ getTeacher.name }}</h5>
                      </div>   
                    </div>
                  </div>
               </div>
               <div class="col-10 offset-1 mt-4">
                <!-- chat area  -->
                <div class="" style="height: calc(500px);overflow-y: auto;">
                 <div class=""
                 v-for="(allMessage,index) in allMessage" :key="index">
                     <div class="d-flex justify-content-end align-items-center" @click="deleteBtn(allMessage.id)" v-if="getTeacherId != allMessage.from_userId && allMessage.student_id == user.id && getTeacherId == allMessage.to_userId">
                        <p class="bg-primary p-3 rounded text-white">{{ allMessage.message }}</p>
                        <img v-if="allMessage.studentImage" v-bind:src=" 'http://localhost:8000/storage/'+ allMessage.studentImage " class="rounded-circle mx-4" style="width: 50px;">
                        <img v-else src="assets\img\profileMale.jpg" class="rounded-circle mx-4" style="width: 50px;">
                     </div>
                     <div class="d-flex justify-content-start align-items-center" 
                     v-if="allMessage.student_id == user.id && getTeacherId == allMessage.from_userId">
                        <img v-if="allMessage.teacherImage" v-bind:src=" 'http://localhost:8000/storage/'+ allMessage.teacherImage " class="rounded-circle mx-4" style="width: 50px;">
                        <img v-else src="assets\img\codeLab Logo.jpg" class="rounded-circle mx-4" style="width: 50px;">
                        <p class="bg-secondary p-3 rounded text-white">{{ allMessage.message }}</p>
                     </div>
                 </div>
                </div>
            <!-- chat area  -->
                <div class="d-flex justify-content-center align-items-center">
                    <textarea cols="30" rows="4" v-model="message"  placeholder="Text Message Here" class="form-control col-8"></textarea>
                    <div class="col-1" @click="sendBtn" title="send" >
                        <i :class="{'disabled bg-secondary' : message == null || message == '','bg-primary': message != null || message != ''}" class="fa-solid fa-paper-plane p-3 rounded-circle text-white"></i>
                    </div>
                </div>
               </div>
              </div>
              <!-- conservation end -->
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
    name : 'chatPage',
    data () {
      return {
        dark : false,
        light : true,
        modeDL : false,
          user: [],
          message: '',
          allMessage : [],
        nullMessage: false,
        chatBg : '',
        teacher: [],
        getTeacher: [],
        teacherId: '',
        getTeacherId: '',
        dbTeacherId: '',
        search: '',
        deleteStatus: false,
        messageId: '',
        deleteMessage: '',
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
      cancelBtn() {
        this.deleteStatus = false
      },
      deleteBtn(id) {
        this.deleteStatus = true
        this.messageId = id
      },
      yesBtn() {
        axios.post("http://localhost:8000/api/deleteMessage",{ id:this.messageId }).then((response) => {
         this.deleteMessage = response.data.messageDelete
        })
        this.deleteStatus = false
        this.getAllMessage()
      },
      searchChat() {
        axios.post("http://localhost:8000/api/searchChat",{ search:this.search }).then((response) => {
         this.teacher = response.data.search
        })
      },
      chatTeacher(id, dbTeacher) {
        axios.post("http://localhost:8000/api/chatTeacher",{ id }).then((response) => {
          this.getTeacher = response.data.chatTeacher
          this.chatBg = id
          this.teacherId = id
          this.dbTeacherId = dbTeacher
          this.getAllMessage()
        })
      },
      getAllMessage() {
        let localId = JSON.parse(localStorage.getItem('dataKey'));
          axios.post("http://localhost:8000/api/chatList",{ teacherId : this.teacherId , student_id : localId }).then((response) => {
            this.allMessage = response.data.allMessage;
            this.getTeacherId = this.teacherId
        })
      },
      sendBtn() {
        if (!this.message) {
          this.nullMessage = true
        } else {
          let localId = JSON.parse(localStorage.getItem('dataKey'));
          axios.post("http://localhost:8000/api/contactTeacher", {
            toUserId: this.teacherId, fromUserId: localId,
            message: this.message, studentId: this.user.id, 
            teacherIdDb : this.dbTeacherId
          })
            .then((response) => {
            this.message = '';
            this.allMessage = response.data.allMessage;
            this.chatTeacher(this.teacherId,this.dbTeacherId)
        })
        }
      },
      getTeacherList() {
        axios.get("http://localhost:8000/api/teacher").then((response) => {
          this.teacher = response.data.teacher
          })
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
    this.getTeacherList();
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
