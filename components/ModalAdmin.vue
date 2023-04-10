<template>
  <div class="mask">
    <div class="modal">
        <h1>Admin</h1>
        <p>Aqui puedes ver el JSON actual y modificarlo a tu gusto :)</p>
        <textarea class="texarea" cols="30" rows="10" v-model="json"></textarea>
        <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Admin',
  data() {
    return {
      json:''
    }
  },
  mounted(){
    try {
        this.json=JSON.stringify(this.$store.state.store)
    } catch (error) {
        this.json=''
    }

  },
  methods: {
            ...mapMutations({
      setStore: 'setStore',
    }),
     submit(){
        this.setStore(JSON.parse(this.json))
     }
  },
}
</script>

<style lang="scss" scoped>
.mask{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.192);
    z-index: 10;
    .modal{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 70%;
        height: 35rem;
        border-radius: 10px;
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        @media screen and (min-width:600px) {
            width: 50%;
            height: 50%;
            
        }
        h1{
            font-size: 2.5rem;
        }
        p{
            text-align: center;
            width: 90%;
            font-size: 2rem;
        }
        
        button{
            border: unset;
        }
        .texarea{
            width: 95%;
            resize: none;
            border-radius: 5px;
            border: 1px solid #2F4858;
        }
    }
}
</style>>

