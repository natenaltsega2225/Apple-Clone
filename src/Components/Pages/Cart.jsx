import React from 'react';

function Cart() {
  return (
    <div>
      <section className="internal-page-wrapper py-5">
        <div className="container">
          <h1 className="display-4 text-center mb-5">Shopping Cart</h1>
          <div className="row">
            <div className="col-md-12">
              {/* Cart items go here */}
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;