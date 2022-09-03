import React from "react";
import { Footer, Header } from "../../Components";

const Cart = () => {
  return (
    <>
      <Header />
      <section class="shopping-cart">

    <h1 class="heading">Your <span>products</span></h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={require('../../assets/wedding1.jpeg')} alt="" />
            <div class="content">
                <h3>KANJIVARAM ARTS SILKS SAREE
</h3>
                <form action="">
                    <span>quantity : </span>
                    <input type="number" name="" value="1" id="" />
                </form>
                <div class="price">Rs.249.99 <span>Rs.399.99</span></div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={require('../../assets/fancy1.jpg')} alt="" />
            <div class="content">
                <h3>ELECTRONIC JACQUARD SILK SAREE</h3>
                <form action="">
                    <span>quantity : </span>
                    <input type="number" name="" value="1" id="" />
                </form>
                <div class="price">Rs.249.99 <span>Rs.399.99</span></div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={require('../../assets/fancy3.jpg')} alt="" />
            <div class="content">
                <h3>Fancy Silk cotton</h3>
                <form action="">
                    <span>quantity : </span>
                    <input type="number" name="" value="1" id="" />
                </form>
                <div class="price">Rs.249.99 <span>Rs.399.99</span></div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-times"></i>
            <img src={require('../../assets/kotanji1.jpeg')} alt="" />
            <div class="content">
                <h3>Bridal Soft skill saree</h3>
                <form action="">
                    <span>quantity : </span>
                    <input type="number" name="" value="1" id="" />
                </form>
                <div class="price">Rs.249.99 <span>Rs.399.99</span></div>
            </div>
        </div>


    </div>

    <div class="cart-total">
        <h3> subtotal : <span>Rs.1499.94</span> </h3>
        <h3> discount : <span>-Rs.99.94</span> </h3>
        <h3> subtotal : <span>Rs.1400.00</span> </h3>
        <a href="#" class="btn">proceed to checkout</a>
    </div>

</section>
      <Footer />
    </>
  );
};
export default Cart;
