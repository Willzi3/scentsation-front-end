import { createStore } from 'vuex'
import router from '../router/index'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    // user: null || JSON.parse(localStorage.getItem("users")),
    user:null,
    users: null,
    token: null,
    product: null,
    products: null,
    cart: [],
    asc: true
  },
  mutations: {
    setCart: (state, cart) => {
      state.cart = cart;
    },
    setUser: (state, user) => {
      state.user = user;
      // localStorage.setItem("users", JSON.stringify(user));
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
    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
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
          console.log(data.user);
          context.commit('setUser', data.user)
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
            joined_date: payload.joined_date,
            phone: payload.phone,
            gender: payload.gender,
            address: payload.address,
            description: payload.description,
            image: payload.image,
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      router.push('/', alert("successfully registered"))

        },
        // update: async (context, payload) => {
        //   fetch("https://compify-backend.herokuapp.com/users" +user.user_id, {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //       full_name: payload.full_name,
        //       user_type: "user",
        //       joined_date: payload.joined_date,
        //       phone: payload.phone,
        //       gender: payload.gender,
        //       address: payload.address,
        //       description: payload.description,
        //       image: payload.image,
        //     }),
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((data) => console.log(data));
        //   router.push('/profile', alert("profile successfully updated"))

        //     },
            update: async (context, payload) => {
            console.log(payload);
              const {
                full_name,
                user_type,
                joined_date,
                phone,
                gender,
                address,
                description,
                image,
              } = payload;
              fetch("https://compify-backend.herokuapp.com/users/" + payload.id, {
                method: "PATCH",
                body: JSON.stringify({
                  full_name: full_name,
                  user_type: user_type,
                  joined_date: joined_date,
                  phone: phone,
                  gender: gender,
                  address: address,
                  description: description,
                  image: image,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "x-auth-token": payload.token,
                },
              })
                .then((response) => response.json())
                .then((user) => context.commit("setUser", user[0]));
                router.push("/profile", alert("successfully updated profile"))
              },
    getUsers: async (context) => {
      fetch("https://compify-backend.herokuapp.com/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },
    getUser: async (context, id) => {
      fetch("https://compify-backend.herokuapp.com/users/" +id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
    getProducts: async (context) => {
      fetch("https://compify-backend.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json));
    },
    getProduct: async (context, id) => {
      fetch("https://compify-backend.herokuapp.com/products/" +id)
        .then((response) => response.json())
        .then((product) => context.commit("setProduct", product[0]));
    },
    Deleteproduct: async (context, id) => {
      fetch("https://compify-backend.herokuapp.com/products/" + id, {
        method: "DELETE",
      }).then((product) => context.commit("setProduct", product));
      this.router.push("/admin")
    },
    Deleteuser: async (context, id) => {
      fetch("https://compify-backend.herokuapp.com/users/" + id, {
        method: "DELETE",
      }).then((user) => context.commit("setUsers", user));
    },
    // Addproduct: async (context, product) => {
    //   fetch("https://compify-backend.herokuapp.com/products/", {
    //     method: "POST",
    //     body: JSON.stringify(product),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then(() => context.commit("setProducts"));
    // },
    addProduct: async (context, payload) => {
      fetch("https://compify-backend.herokuapp.com/products/", {
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,
            price: payload.price,
            descriptions: payload.descriptions,
            image: payload.image,
            category: payload.category,
            created_date: payload.created_date,
            stock: payload.stock,
           
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      

        },
   //cart
   getcart: (context, id) => {
    if (context.state.user === null) {
      alert("Please Login");
    } else {
      id = context.state.user.user_id;
      fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
        // fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          context.commit("setcart", data);
        });
    }
  },

  addTocart: async (context, product, id) => {
    console.log(product.product_id);
    id = context.state.user.user_id;
    // console.log(product);
    await fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
      // await fetch("https://model-madness.herokuapp.com/users/" + id + "/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: product.product_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getcart", id);
      });
  },
  deleteFromCart: async (context, id) => {
    const newCart = context.state.cart.filter((product) => product.id != id);
    swal({
      title: "Are you sure you want to remove this item?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Removed from cart", {
          icon: "success",
        });
      }
    });
    context.commit("removeFromCart", newCart);
  },
  },

  plugins: [createPersistedState()]
})
