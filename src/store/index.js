import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    user: null,
    users: null,
    token: null,
    product: null,
    products: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    login: async (context, payload) => {
      let res = await fetch("https://compify-backend.herokuapp.com/users/login", {
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
      console.log(data)

      if(data.token){
        context.commit('setToken', data.token)

        // Verify token
        // 
        fetch('https://compify-backend.herokuapp.com/users/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          context.commit('setUser', data.user)
          console.log(data.user)
          router.push('/products', alert("Successfully Logged In:"))
        })
      } 
      else {
        alert(data)
      }
    },
    register: async (context, payload) => {
      fetch("https://compify-backend.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            full_name: payload.full_name,
            email: payload.email,
            password: payload.password,
            user_type: "user",
            image: payload.image
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      router.push('/', alert("successfully registered"))

        },
        update: async (context, payload) => {
          fetch("https://compify-backend.herokuapp.com/users/register", {
            method: 'POST',
            body: JSON.stringify({
                birth_date: payload.birth_date,
                gender: payload.gender,
                address: payload.address,
                description: payload.description,
                image: payload.image
            }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
          router.push('/profile', alert("profile successfully updated"))
    
            },
    getUsers: async (context) => {
      fetch("https://compify-backend.herokuapp.com/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },
    getUser: async (context, id) => {
      fetch("https://compify-backend.herokuapp.com/users/" +id)
        .then((response) => response.json())
        .then((user) => context.commit("setProduct", user[0]));
    },
    getProducts: async (context) => {
      fetch("https://compify-backend.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json));
    },
    getProduct: async (context, id) => {
      fetch("https://compify-backend.herokuapp.com/products/" +id)
        .then((response) => response.json())
        .then((product) => context.commit("setUser", product[0]));
    },
    //add Post
    addPost: async (context, post) => {
      fetch("https://compify-backend.herokuapp.com/users/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((post) => context.dispatch("getPost", post));
    },
  }
})
