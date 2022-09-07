import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    user: null || JSON.parse(localStorage.getItem("users")),
    users: null,
    token: null,
    product: null,
    products: null,
    cart: null,
    asc: true
  },
  mutations: {
    setCart: (state, cart) => {
      state.cart = cart;
    },
    setUser: (state, user) => {
      state.user = user;
      localStorage.setItem("users", JSON.stringify(user));
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
        //   fetch("https://compify-backend.herokuapp.com/users", {
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
        update: async (context, user) => {
          fetch("https://compify-backend.herokuapp.com/users", {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((user) => context.commit("setuser", user));
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
    // Deleteuser: async (context, id) => {
    //   fetch("http://localhost:7373/users/" + id, {
    //     method: "DELETE",
    //   }).then((user) => context.commit("setusers", user));
    // },
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
    getCart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch("https://compify-backend.herokuapp.com/users" + id + "/cart", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setProducts", data);
        });
    },
    // addTocart: async (context, product, id) => {
    //   console.log(context.state.user);
    //   id = context.state.user.user_id;
    //   console.log(product);
    //   await fetch("https://compify-backend.herokuapp.com/users" + id + "/cart", {
    //     method: "POST",
    //     body: JSON.stringify(art),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       "x-auth-token": context.state.token,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       context.dispatch("getcart", id);
    //     });
    // },
    // clearcart: async (context, id) => {
    //   id = context.state.user.user_id;
    //   await fetch("http://localhost:7373/users/" + id + "/cart", {
    //     method: "DELETE",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       "x-auth-token": context.state.token,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       context.dispatch("getcart", id);
    //     });
    // },
    // deletecartItem: async (context, list, id) => {
    //   id = context.state.user.user_id;
    //   await fetch(
    //     "http://localhost:7373/users/" + id + "/cart/" + list.cartid,
    //     {
    //       method: "DELETE",
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "x-auth-token": context.state.token,
    //       },
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       context.dispatch("getcart", id);
    //     });
    // },
  }
})
