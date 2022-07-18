# SUPERCRIMP E-Commerce Platform

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/readme/logo-white.png">
  <source media="(prefers-color-scheme: light)" srcset="./public/readme/logo-black.png">
  <img alt="SUPERCRIMP Logo" src="./public/readme/logo-black.png">
</picture>

SUPERCRIMP is an existing, small, local business that sells 3D-printed crimp holds for rock-climbing enthusiasts.

At the time of starting this project, the business hadn’t been able to find an appropriate website to host its online store, with some e-commerce platforms falling short of features and others being too complicated or expensive for a simple business.

Thus, the goal of this project was to build a customised online store that meets the needs of SUPERCRIMP’s stakeholders:

**For customers**

- It must be convenient to browse and make purchases.
- They must be able to pay securely online.

**For the business owner**

- It must be easy to view order details and mark them as complete.
- It must be easy to add, update and delete product listings.

## Website

Coming soon

## Features

### Browsing product catalogue

1. On the home page, customers can see the list of available products.

   > A scrolling banner gives information about the company and products.
   > ![SUPERCRIMP homepage and scrolling banner](./public/readme/1_Homepage_Carousel.gif)

   > Available products are listed below the banner.
   > ![SUPERCRIMP homepage with scrolling banner and products](./public/readme/1_Homepage_Products.gif)

2. Customers can click on each item to view more details on the ℹ️ **Product page**.

   > Ways to navigate to the Product Listing page. Customers can click on the Image, Product Name or View Details button on the Product cards.
   > ![Ways to navigate to individual Product Listings](./public/readme/1_Homepage_ProductCard.jpg)

   > This is what the Product Listing page looks like.
   > ![Product listing page](./public/readme/2_ProductListing.jpg)

3. Customers can choose to 🛒 **Add to cart** from either view.
   > There is snackbar feedback for user actions (bottom left corner).
   > ![Snackbar feedback on adding items to cart or for error messages](./public/readme/3_Homepage_Add_to_cart.gif)

### Making a purchase

1. Customers can confirm their chosen products (including colour and quantity) on the 🛒 **Cart** page. They can click **Continue shopping**, which brings them back to the product catalogue, or **Proceed to checkout**.

   > They can also edit the items in their cart.
   > ![Editing items in the cart](./public/readme/4_Cart_editing_items.gif)

   > Clicking "Proceed to Checkout" will bring them to the 💳 **Checkout** page.
   > ![Moving from Cart to Checkout page](./public/readme/5_Checkout_1.gif)

2. At the 💳 **Checkout** page, customers have to enter their name, email, mobile number, and shipping address. At the bottom, they will see a summary of their order. Clicking "Proceed to Payment Gateway" redirects them to Stripe to make payment.

   > Customers need to fill out all details before proceeding to make payment via Stripe.
   > ![Users need to fill in all details before proceeding to make payment](./public/readme/5_Checkout_2.gif)

3. Upon successful payment, customers are brought back to the SUPERCRIMP website, and an email with their order details is sent to their email address.

   > Customers have to provide Stripe with their email address and credit card details. A summary of items in their order is shown on the left of the screen.
   > ![Preview of the Stripe gateway](./public/readme/5_Checkout_3.gif)

   > Customers are sent an order confirmation email.
   > ![Email confirmation upon successful payment](./public/readme/6_EmailConfirmation_Customer.jpg)

### Receiving New Orders (Admin)

- Upon successful payment for a new order, Admin receives an email notification with the order details.

### Viewing and Marking Orders as Complete (Admin)

1. On successful login to the Admin Dashboard, the admin sees an overview of Orders (Pending and Completed).
2. They can see the details of each order, including:
   - Items (Product, Quantity of product, Colour)
   - Total amount
   - Customer's name
   - Customer's email
   - Customer's mobile number
   - Shipping address
3. The admin can mark an order as complete once the items have been sent out.

> Walkthrough of viewing orders and marking them as complete
> ![Walkthrough of how the admin would view and edit orders](./public/readme/9_Admin_Orders_Overview.gif)

### Adding, Updating and Deleting Products and Colours (Admin)

_Products refer to the different 3D-printed designs. Colours refer to the 3D-printing material._

1. There are overview pages for Products and Colours, where the Admin can view all Products / Colours, as well as delete any unwanted ones.
2. Admin is able to add a new product, or edit an existing one, with the following details:
   - Product name
   - Product description
   - Colours
   - Usual price
   - Current price (for discounts)
   - Availability
3. Admin is able to add and edit colours with the following details:
   - Colour name
   - Colour hex code
   - Availability

> Walkthrough of adding, editing and deleting Products
> ![Walkthrough of how the admin would view and edit orders](./public/readme/10_Admin_Products.gif)

> Walkthrough of adding, editing and deleting Colours
> ![Walkthrough of how the admin would view and edit orders](./public/readme/11_Admin_Colours.gif)

## Built With

|                    | Tech                                                       | Purpose           |
| ------------------ | ---------------------------------------------------------- | ----------------- |
| **Frontend**       | [React](https://github.com/facebook/react/)                | User interface    |
|                    | [React Router](https://github.com/remix-run/react-router)  | Component routing |
|                    | [Material UI](https://github.com/mui/material-ui)          | Component library |
| **Backend**        | [Node.js](https://github.com/nodejs/node)                  | Server            |
|                    | [Express](https://github.com/expressjs/express)            | Server            |
|                    | [PostgreSQL](https://www.postgresql.org/)                  | Database          |
|                    | [Sequelize](https://sequelize.org/)                        | Database          |
| **Functionality**  | [Stripe](https://stripe.com/docs)                          | Payment           |
|                    | [JWT](https://jwt.io/)                                     | Authentication    |
|                    | [Twilio SendGrid](https://docs.sendgrid.com/)              | Email updates     |

## Contributors

**Elizabeth Tan** | [GitHub](https://github.com/liztanyl/) • [LinkedIn](https://www.linkedin.com/in/elizabethtanyulin/) • [Email](elizabeth.tanyulin@gmail.com)

**Gerald Khor** | [GitHub](https://github.com/gcskhor/) • [LinkedIn](https://www.linkedin.com/in/gerald-khor/) • [Email](elizabeth.tanyulin@gmail.com)
