<template>
  
  <section id="contact" class="py-5 ">
      <div class="container">
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"><h2 class="mb-0">Un projet de création web ?</h2>
        <p class="fw-light fs-5">Allons en discuter autour d'un café</p></div>

        <div class="row gy-4 mt-4"> 
          <div class="col-12 col-md-5">
            <img src="../assets/grab-a-coffee.jpg" alt="Image d'une tasse de café" width="300" height="350" class="rounded-3 shadow">
          </div>
          <div class="col-12 offset-md-1 col-md-6">

            <!-- Formulaire -->
            <form class="row"  @submit.prevent="sendEmail" ref="form">
              <div class="col-12 my-2">
                <label for="name" class="form-label">Nom - Prenom</label>
                <input name="name" type="text" class="form-control" id="name" v-model="name">
              </div>
              <div class="col-12 my-2">
                <label for="email" class="form-label">Email address</label>
                <input name="email" type="email" v-model="email" class="form-control" id="email">
              </div>
              <div class="col-12 my-2">
                <label for="message" class="form-label">Message</label>
                <textarea name="message" v-model="message" class="form-control" id="message" rows="3"></textarea>
              </div>
              <div class="col-12 my-2">
                <button type="submit" class="btn btn-primary w-100">Envoyer</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name:'ContactView',
    //props:['aff'],
    data() {
    return {
      name: '',
      email: '',
      message: ''
      
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_mzecu34', 'template_hy2rvka', e.target,
        '4Gzf3XoiSbXEKjyF-', {
          name: this.name,
          email: this.email,
          message: this.message
        }).then((result) => { 
          //aff = result.text 
          alert('SUCCESS! message envoyé ', result.text);
        } )
        
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style>

</style>