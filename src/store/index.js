import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    User: null,
    Token: null,
    Product: null,
    cart: [],
    product: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.User = user  ;
    },
    setToken: (state, token) => {
      state.token = token  ;
    },
    setProduct(state, product) {
      state.activeProduct = product
    },
    updateCart: (state, product) => {

      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
   
  },
  actions: {
        // Add new product
        addProduct: async (context, product) => {
          fetch("http://localhost:6969/products/add_product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then(() => context.dispatch("getProduct"));
        },
    login: async (context, payload) => {
      let res = await fetch("http://localhost:6969/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });

      let data = await res.json()

      if(data.token){
        context.commit('setToken', data.token)

        // Verify token
        // 
        fetch('http://localhost:6969/users/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          context.commit('setUser', data.user)
          router.push('/products')
        })
      }
      else {
        alert(data)
      }
    },
    signUp: async (context, payload) => {
      fetch("http://eomp.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
            phone_number: payload.phone_number,
            join_date: "2023-06-03",
            user_type: "user",
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
        },
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
          context.dispatch("updateCart", this.state.cart);
        },
    deleteFromCart: async (context, id) => {
          const newCart = context.state.cart.filter((product) => product.id != id);
          context.commit("removeFromCart", newCart);
        },
  },
  modules: {
  }
})

