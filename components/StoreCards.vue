<template>
  <article>
    <section class="ExtraInfo" @click="()=>{showInfo = false}">
        <div>Stock: {{product.stock}}</div>
        <div>Cost: {{product.unit_price}}</div>
    </section>
    <div class="imageContainer" @click="()=>{showInfo = true}" :class="{showInfo:showInfo}">
    <img v-if="!product.image" src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg" alt="">
    <img v-else :src="product.image" alt="">
    </div>
    <section class="addContainer">
        <h2>{{product.name}}</h2>
                    <input type="text" max="999" @input="inputChange" placeholder="Quantity" ref="quantity">
        <button @click="add" :disabled="!quantity || quantity===0">Add to cart</button>
    </section>
  </article>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'cards',
  props:['product'],
  
  data() {
    return {
        quantity:null,
        showInfo:false
    }
  },
  methods: {
        ...mapMutations({
      removeFromShoppingCart: 'removeFromShoppingCart',
      addShoppingCart:'addShoppingCart'
    }),
    inputChange(e){
       const value= e.target.value
       console.log(value)
       if (/^[0-9]+$/.test(value)) {
            this.quantity= parseInt(value)
       }else{
        if (e.target.value !=='') {
            const result=parseInt(value+''.slice(0, -1)) 
            e.target.value=result
            this.quantity= result
        }else{
            this.quantity= ''
        }
       }
    },
    add(){
        this.removeFromShoppingCart(this.product)
        if ( this.quantity !==null && this.product.stock >= this.quantity) {
            this.addShoppingCart({...this.product,quantity:this.quantity})
            this.quantity=null
        }else{
            this.$swal.fire({
            type: 'error',
            title: 'Oops :(',
            text: 'the quantity you request is not available!',
})       
        }
         this.$refs.quantity.value=''
         this.quantity=null
    }
  },
}
</script>

<style lang="scss" scoped>



@keyframes enterLeft {
    0% {
            box-shadow: 0 0 0 0 ;
      transform: translateX(-200%);

    }
    100% {
      transform: translateX(0);
    }
    
}
@keyframes invi {
    0% {
       visibility: hidden;

    }
    99%{
        visibility: hidden
    }
    100% {
      visibility: visible;
    }
    
}
@keyframes enterRight {
    0% {

      transform: translateX(200%);

    }
    100% {
      transform: translateX(0);
    }
    
}
 article{
    position: relative;
    width: 92%;
    height:120px;
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    border-radius: 10px;
    @media screen and (min-width:600px) {
        flex-direction: column;
        max-width: 300px;
        height: 250px;
    }
    .ExtraInfo{
        position: absolute;
        left: 0;
        height: 100%;
        display: flex;
        width: 60%;
        z-index: 3;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        @media screen and (min-width:600px) {
            width: 100%;
            height: 70%;
    }
        div{
            font-size: 2rem;
        }
        
    }
    .imageContainer{
        width: 45%;
        height: 100%;
        transition-property: transform;
        transition-duration: 0.5s;
        transition-timing-function: linear;
        transition-delay: 0s;
                &.showInfo{
            transform: translateX(-200%);
                        @media screen and (min-width:600px) {
                    transform:translateY(-200%)
    }
        }
            @media screen and (min-width:600px) {
        width: 100%;
        height: 62%;
    }
    }
    img{
        animation: enterLeft 1s ease-out 0.9s alternate,invi 1s linear 0s alternate,;
        position: relative;
        z-index: 4;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    .addContainer{
        transform: translateX(200%);
        animation: enterRight 0.9s ease-in forwards alternate;
        animation-delay: 1s;
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        justify-content: space-evenly;
        @media screen and (min-width:600px) {
        width: 100%;
        height: 70%;
    }
        h2{
            text-align: center;
        }

        input{
            height: 20px;
            width: 40%;
            border: unset;
            text-align: center;
              appearance: textfield;
                -webkit-appearance: none;
  margin: 0;
  border-bottom: 1px solid black;
  outline: unset;
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
  margin: 0;}
        }
        button{
            height: 25px;
            border: unset;
        }
        button:disabled {
            cursor: not-allowed;
            filter:opacity(0.85);
           &:hover{
            filter:opacity(0.85);
           }
}

    }
 }
</style>
