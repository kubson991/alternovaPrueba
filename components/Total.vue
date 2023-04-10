<template>
  <section id="total">
    <h1>Cart</h1>
    <section class="shoppingCart" v-for="(product,index) in getShoppingCart " :key="index">
        <p>{{product.name}}</p>
        <p>{{product.quantity}}</p>
        <p>{{product.unit_price}}</p>
        <p>$ {{product.unit_price * product.quantity}}</p>
        <button @click="removeFromShoppingCart(product)"><span class="material-icons-outlined">
close
</span></button>
    </section>
    <section class="Total">
        <p>Total: {{total}}</p>
        <button @click="soldProducts">Create Order</button>
    </section>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Total',
  data() {
    return {
      // Aquí puedes agregar los datos del componente
    }
  },
  computed: {
    ...mapGetters([
      'getShoppingCart'
    ]),
    total(){
        let cost = 0
        this.getShoppingCart.forEach(product => {
            cost +=product.quantity*product.unit_price
        });
        return '$' + cost 
    }
  },
  methods: {
        ...mapMutations({
      removeFromShoppingCart: 'removeFromShoppingCart',
      addShoppingCart:'addShoppingCart',
      sold:'sold'
    }),
    soldProducts(){
this.$swal.fire({
  title: 'Quieres ser redirigido a la plataforma de pagos? (es un proyectico en React no te preocupes )',
  type:'question',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Pagar',
  denyButtonText: `No Pagar`,
}).then((result) => {
  if (result.value) {
    this.sold()
    this.$swal.fire('Seras Redirigido a la plataforma de pagos', 'En cualquier caso el JSON se ha modificado como si se modificara en base de datos :D', 'success')
    window.open('https://splendid-yeot-fc8861.netlify.app')
  } else {
    this.$swal.fire('No seras Redirigido a la plataforma de pagos', 'asi que chiste :(', 'info')
  }
})
    }
  },
  mounted() {
    // Aquí puedes agregar el código que se ejecuta cuando el componente se monta
  }
}
</script>

<style lang="scss" scoped>
@keyframes enterBottom {
    0% {
      transform: translateY(100vw);

    }
    100% {
      transform: translateY(0);
    }
    
}
@keyframes enterRight {
    0% {
      transform: translateX(100vw);

    }
    100% {
      transform: translateX(0);
    }
    
}
    #total{
        animation: enterBottom 0.9s ease-in forwards alternate;
        @media screen and (min-width:1100px) {
          animation: unset;
          height: 100%;

}
        width: 100%;
        height: fit-content;
        h1{
            font-size: 2rem;
            text-align: center;
            padding-top: 1rem;
        }
        .shoppingCart{
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr 1fr 0.4fr;
            justify-content: space-evenly;
            padding: 1rem 0;
            width: 95%;
            font-size: 1.3rem;
            margin: auto;
            align-content: center;
            align-items: center;
            justify-items: center;
            p{
                text-align: center;
            }
            button{
                width: 28px;
                height: 28px;
                background-color: var(--color-variacion);
                border: unset;
                color: var(--color-claro);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2px;
                border-radius: 4px;
                cursor: pointer;
            }
        }
        .Total{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            font-size: 1.6rem;
            button{
                border-radius: 4px;
                border: unset;

            }
        }
    }
</style> >
