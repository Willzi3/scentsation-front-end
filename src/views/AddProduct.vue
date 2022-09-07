<template>

    <div class="container">
      <form @submit.prevent="addProduct">
        <h3>Register</h3>
            <input class="form-input" type="text" name="name" required v-model="name" placeholder="Full Name"/>
            <input class="form-input" type="text" name="price" required v-model="price" placeholder="Email:"/>
            <input class="form-input" type="text" name="descriptions" required v-model="descriptions" placeholder="Password:"/>
            <input class="form-input" type="text" name="image" required v-model="image" placeholder="Joined Date:"/>
            <input class="form-input" type="text" name="category" required v-model="category" placeholder="Phone:"/>
            <input class="form-input" type="text" name="created_date" required v-model="created_date" placeholder="Gender:"/>
            <input class="form-input" type="text" name="stock" required v-model="stock" placeholder="Address:"/>
            <input class="form-btn" type="submit" value="Add" />
            <hr>
            <div class="form-extra">
              <router-link to="/"><p>Already have an Account</p></router-link>
            </div>
      </form>
  
      
    </div>
  </template>
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.product;
      },
    },
    data() {
      return {
        name: "",
        price: "",
        descriptions: "",
        image: "",
        category: "",
        created_date: "",
        stock: "",
     
      };
    },
    methods: {
      addProduct() {
        this.$store.dispatch("addProduct", {
        name: this.name,
        price: this.price,
        descriptions: this.descriptions,
        image: this.image,
        category: this.category,
        created_date: this.created_date,
        stock: this.stock,
  
        });
      },
    },
  };
  </script>
  <style scoped>
  .container{
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form{
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 400px;
    gap: 10px;
  }
  .form-input{
    width: 200px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    height: 30px;
  }
  .form-btn{
    width: 208px;
    border: none;
    border-radius: 5px;
    height: 30px;
  }
  .form-extra{
    display: flex;
    gap: 10px;
  }
  .form-extra p {
    width: 200px;
    border: none;
    border-radius: 5px;
    height: 25px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-extra a{
    text-decoration: none;
    color: black;
  }
  h3{
    font-weight: bold;
    font-size: 1.4rem;
  }
  hr{
    width: 90%;
    
  
  }
  .user-type{
    display: none;
  }
  </style>
  