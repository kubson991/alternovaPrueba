<template>
  <section id="mainContainer">
    <Modal-admin v-if="showAdmin" @close="()=>showAdmin=false"/>
    <Historic v-if="showHistoric" @close="()=>showHistoric=false"/>
    <div class="FixedButtons" @click="()=>showAdmin = !showAdmin">
      <span class="material-icons-outlined">
admin_panel_settings
</span>
    </div>
    <div class="FixedButtons Historic" @click="()=>showHistoric = !showHistoric">
      <span class="material-icons-outlined">
pending_actions
</span>
    </div>
    <header>
      <img src="https://www.alternova.co/wp-content/uploads/2021/03/cropped-logo-Alternova.png" alt="alternova">
    </header>
    <main>
      <section class="productsContainer">
        <Store-cards v-for="product in store.products" :key="product.name" :product="product"/>
      </section>
      <section class="total" v-if="getShoppingCart.length>0" :class="{expand:!closeTotal}">
        <Total />
        <div class="expandButton" @click="closeTotal = !closeTotal">
          <span class="material-icons-outlined">
compare_arrows
</span>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
import { mapState , mapGetters} from 'vuex'
export default {
  name: 'IndexPage',
  data(){
    return{
      closeTotal:true,
      showAdmin:false,
      showHistoric:false
    }
  },
    computed: {
    ...mapState({
      store: state => state.store
    }),
        ...mapGetters([
      'getShoppingCart'
    ]),
  }
}
</script>
<style lang="scss">
.FixedButtons{
      animation: enterRight 2.5s ease-in-out forwards alternate;
  position: fixed;
  top: 60px;
  left: 10px;
  width: 4rem;
  height: 4rem;
  padding: 0.2rem;
  border-radius: 50%;
  border: solid 3px #2F4858;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  z-index: 100;
  &.Historic{
    top: 110px;
  }
}
#mainContainer{
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .total{
    position: relative;
    z-index: 11;
    flex: 0.5;
    overflow: auto;
    overflow-x: visible;
    width: 100%;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.584);
  }
  .expandButton{
    display: none;
  }
  main{
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    width: 100% ;
    max-height: calc(99.5vh - 55px);
                  @media screen and (min-width:1200px) {
    max-height: calc(99.5vh - 76px);
              }
  }
  header{
    padding-top: 2rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
              animation: enterTop 0.5s ease forwards alternate;
              height: fit-content;
              min-height: 55px;
              @media screen and (min-width:1200px) {
                min-height: 75px;
              }
    img{
      filter: drop-shadow(0 0px 2px rgba(0, 0, 0, 0.7));
      max-width: 85%;
      object-fit: cover;
    }
  }
  .productsContainer{
    transition: all 1s;
    overflow: auto;
        overflow-x: hidden;
      flex: 1;
      padding:0.5rem 0;
    width: 100%;
    padding-right: 0.3rem;
    margin: auto;
        display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    @media screen and (min-width:1200px){
      grid-template-rows: repeat(auto-fit, minmax(240px, 260px));
      row-gap: 2rem;
    }
    gap: 1rem;
    align-items: center;
    justify-items: center;
    border-radius: 10px;
    & > article{
    animation: enterLeft 0.9s ease-in forwards alternate,enter 2.2s ease-in forwards alternate;
    }
    & > article:nth-child(odd){
          animation: enterRight 0.9s ease-in forwards alternate,enterv2 2.2s ease-in forwards alternate;
    }
@keyframes enterLeft {
    0% {
      transform: translateX(100vw);

    }
    100% {
      transform: translateX(0);
    }
    
}
@keyframes enterRight {
    0% {
      transform: translateX(-100vw);

    }
    100% {
      transform: translateX(0);
    }
    
}
@keyframes enterTop {
    0% {
      transform: translateY(-100vw);

    }
    100% {
      transform: translateY(0);
    }
    
}
@keyframes enter {
    0% {
      box-shadow: 0px 0px 0px 0px;

    }
    
    99%{
      box-shadow: 0px 0px 0px 0px;
    }
    100% {
        box-shadow: inset 0px 0px 2px 0px #bb388d73 ,0px 0px 7px 0px #854b99b9 ;
    }
    
}
@keyframes enterv2 {
    0% {
            box-shadow: 0px 0px 0px 0px;

    }
    99%{
                  box-shadow: 0px 0px 0px 0px;
    }
    100% {
        box-shadow: inset 0px 0px 2px 0px #854b99b9  ,0px 0px 7px 0px #bb388d73 ;
    }
    
}
  }
  @media screen and (min-width:1100px) {
      .expandButton{
        position: absolute;
        top: 0;
        bottom: 0;
        left: -30px;
        margin: auto;
    display: block;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 60px;
    width: 30px;
        box-shadow: -2px 0px 4px 0px rgba(0, 0, 0, 0.135);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
  }
  main{
    padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 96%;
  margin: auto;
  flex: 1;
  .productsContainer{
    min-width: 60%;
    margin: unset;
    flex: 1;
  }
  .total{
    overflow: inherit;
    overflow-x: visible;
                  transition-property: transform;
            transition-duration: 0.5s;
        transition-timing-function: linear;
        transition-delay: 0s;
          position: fixed;
          right: 0;
          top: 0;
    width: 35vw;
    height: 100vh;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    &.expand {
      transform: translateX(100%);
    }
  }
  }

}
}

</style>
