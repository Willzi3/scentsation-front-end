<template>
  <div class="container">
    <h1>Contact Us</h1>
    <div class="row">
        <div class="form">
        <form action="https://formspree.io/f/maykqvne" method="POST">
        <input class="form-input" type="text" name="full_name" placeholder="Full Name:">
        <input class="form-input" type="email" name="email" placeholder="Email:">
        <input class="form-input" type="text" name="phone" placeholder="Phone:">
        <textarea class="form-input" name="message" placeholder="Message"></textarea>
        <button class="form-input" type="submit">Send</button>
            </form>
        </div>
        <div class="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1662826475652!5m2!1sen!2sza" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.row{
    display: flex;
    gap: 20px;
    width: 90%;
}
.form{
    width: 45%;
}
.form-input{
    width: 300px;
    height: 50px;
    border-radius: 6px;
    border: none;
}
form{
    background: black;
    border-radius: 10px;
    width: 450px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.location{
    width: 45%;
}
</style>