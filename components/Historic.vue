<template>
  <div class="mask" @click.self="close">
    <div class="modal" @click.stop>
      <h1>Historial De compras</h1>
      <p>Aqui puedes encontrar las compras realizadas mediante su ID, al clickear alguno, se copiara a tu portapapeles el JSON solicitado por la prueba :3.</p>
      <div v-for="buys in getHistoric" :key="buys.id">
        <button @click="copySomething(buys)">{{buys.id}} | ${{buys.cost}} </button>
      </div>
      <h2 v-if="getHistoric.length===0">Ups,Parece que no se han realizado compras...</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
  name: 'Historic',
  data() {
    return {
      json:''
    }
  },
  mounted(){
  },
  computed:{
            ...mapGetters([
      'getHistoric'
    ]),
  },
  methods: {
            async copySomething(buys) {
              console.log(buys)
              const text=JSON.stringify(buys)
            try {
                await this.$copyText(text);
                alert('El JSON se ha copiado a tu portapapeles')
            } catch (e) {
                console.error(e);
            }
        },
     close(){
        this.$emit('close')
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
      h2{
        text-align: center;
        width: 80%;
        margin: 0 auto;
      }
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 70%;
        height: 45rem;
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
            text-align: justify;
            width: 90%;
            font-size: 2rem;
        }
        
    }
}
</style>>

