import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import upload_area from "./upload_area.png";
import versace from "./versace.jpg";
import coco_mademoiselle_chanel from "./coco-mademoiselle-chanel.jpg";
import coco_noir_chanel from "./coco-noir-chanel.jpg";
import checkmark from "./checkmark.png";
import perfume1 from "./perfume1.png";
import perfume2 from "./perfume2.png";
import perfume3 from "./perfume3.png";

export const assets = {
  logo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  upload_area,
  versace,
  coco_mademoiselle_chanel,
  coco_noir_chanel,
  checkmark,
  perfume1,
  perfume2,
  perfume3
};

export const BagIcon = () => {
  return (
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
    </svg>
  )
}

export const CartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>

  )
}

export const BoxIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);

export const productsDummyData = [
  {
    "_id": "67a1f4e43f34a77b6dde9144",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Chanel No. 5",
    "description": "Chanel No. 5 is a timeless classic, offering a floral bouquet of rose and jasmine with a hint of vanilla. This iconic fragrance is perfect for those who appreciate elegance and sophistication.",
    "price": 199.99,
    "offerPrice": 149.99,
    "image": [
      "https://www.chanel.com/images/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9564912943134.jpg",
    ],
    "category": "Floral",
    "date": 1738667236865,
    "__v": 0
  },
  {
    "_id": "67a1f52e3f34a77b6dde914a",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Dior Sauvage",
    "description": "Dior Sauvage is a fresh and spicy fragrance with notes of bergamot, pepper, and amberwood. It's designed for the modern man who exudes confidence and charisma.",
    "price": 159.99,
    "offerPrice": 129.99,
    "image": [
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw1935e7c1/Y0685240/Y0685240_F068524009_background_ZHC.png?sw=3000&sh=1600"
    ],
    "category": "Spicy",
    "date": 1738667310300,
    "__v": 0
  },
  {
    "_id": "67a1f5663f34a77b6dde914c",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Gucci Flora",
    "description": "Gucci Flora is a rich white floral fragrance that captures the spirit of the contemporary, diverse, and authentic women of Gucci. It features notes of tuberose and jasmine.",
    "price": 129.99,
    "offerPrice": 99.99,
    "image": [
      "/gucci_flora.webp"
    ],
    "category": "White Floral",
    "date": 1738667366224,
    "__v": 0
  },
  {
    "_id": "67a1f5993f34a77b6dde914e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Yves Saint Laurent Black Opium",
    "description": "Black Opium by Yves Saint Laurent is a seductive fragrance with notes of coffee, vanilla, and white flowers. It's perfect for a night out or a special occasion.",
    "price": 149.99,
    "offerPrice": 119.99,
    "image": [
      "/ysl_black_opium.png"
    ],
    "category": "Seductive",
    "date": 1738667417511,
    "__v": 0
  },
  {
    "_id": "67a1f5ef3f34a77b6dde9150",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Tom Ford Oud Wood",
    "description": "Tom Ford Oud Wood is a luxurious and exotic fragrance with notes of oud, sandalwood, and vetiver. It's a sophisticated scent for those who appreciate the finer things in life.",
    "price": 299.99,
    "offerPrice": 249.99,
    "image": [
      "/tom_ford_oud_wood.webp"
    ],
    "category": "Exotic",
    "date": 1738667503075,
    "__v": 0
  },
  {
    "_id": "67a1f70c3f34a77b6dde9156",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Jo Malone Peony & Blush Suede",
    "description": "Jo Malone Peony & Blush Suede is a charming and flirtatious fragrance with notes of peony, red apple, and suede. It's perfect for adding a touch of elegance to any day.",
    "price": 119.99,
    "offerPrice": 89.99,
    "image": [
      "/jo_malone.webp"
    ],
    "category": "Charming",
    "date": 1738667788883,
    "__v": 0
  },
  {
    "_id": "67a1f7c93f34a77b6dde915a",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Creed Aventus",
    "description": "Creed Aventus is a bold and sophisticated fragrance with notes of blackcurrant, bergamot, and oakmoss. It's designed for the man who is confident and successful.",
    "price": 349.99,
    "offerPrice": 299.99,
    "image": [
      "/aventus.webp"
    ],
    "category": "Bold",
    "date": 1738667977644,
    "__v": 0
  },
  {
    "_id": "67a1f8363f34a77b6dde915c",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Versace Eros",
    "description": "Versace Eros is a fresh and woody fragrance with notes of mint, green apple, and tonka bean. It's perfect for the man who is passionate and strong.",
    "price": 89.99,
    "offerPrice": 69.99,
    "image": [
      "/versace_eros.png"
    ],
    "category": "Woody",
    "date": 1738668086331,
    "__v": 0
  },
  {
    "_id": "67a1f85e3f34a77b6dde915e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Dolce & Gabbana Light Blue",
    "description": "Dolce & Gabbana Light Blue is a fresh and fruity fragrance with notes of Sicilian lemon, apple, and cedarwood. It's perfect for a sunny day or a casual outing.",
    "price": 99.99,
    "offerPrice": 79.99,
    "image": [
      "/dolce_and_gabbana_light_blue.png"
    ],
    "category": "Fruity",
    "date": 1738668126660,
    "__v": 0
  },
  {
    "_id": "67a1fa4b3f34a77b6dde9166",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "name": "Hermès Terre d'Hermès",
    "description": "Hermès Terre d'Hermès is a woody and spicy fragrance with notes of grapefruit, pepper, and flint. It's designed for the man who is grounded and sophisticated.",
    "price": 129.99,
    "offerPrice": 109.99,
    "image": [
      "/terre_hermes.webp"
    ],
    "category": "Woody Spicy",
    "date": 1738668619198,
    "__v": 0
  }
]

export const userDummyData = {
  "_id": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": "Adoodevv",
  "email": "admin@example.com",
  "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
  "cartItems": {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  "__v": 0
}

export const orderDummyData = [
  {
    "_id": "67a20934b3db72db5cc77b2b",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Chanel No. 5",
          "description": "Chanel No. 5 is a timeless classic, offering a floral bouquet of rose and jasmine with a hint of vanilla. This iconic fragrance is perfect for those who appreciate elegance and sophistication.",
          "price": 199.99,
          "offerPrice": 149.99,
          "image": [
            "https://www.chanel.com/images/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9564912943134.jpg",
          ],
          "category": "Floral",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20934b3db72db5cc77b2c"
      }
    ],
    "amount": 156.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "Adoodevv",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672426822,
    "__v": 0
  },
  {
    "_id": "67a20949b3db72db5cc77b2e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f52e3f34a77b6dde914a",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Dior Sauvage",
          "description": "Dior Sauvage is a fresh and spicy fragrance with notes of bergamot, pepper, and amberwood. It's designed for the modern man who exudes confidence and charisma.",
          "price": 159.99,
          "offerPrice": 129.99,
          "image": [
            "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw1935e7c1/Y0685240/Y0685240_F068524009_background_ZHC.png?sw=3000&sh=1600"
          ],
          "category": "Spicy",
          "date": 1738667310300,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20949b3db72db5cc77b2f"
      }
    ],
    "amount": 135.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "Adoodevv",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672448031,
    "__v": 0
  },
  {
    "_id": "67a209bab3db72db5cc77b34",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Chanel No. 5",
          "description": "Chanel No. 5 is a timeless classic, offering a floral bouquet of rose and jasmine with a hint of vanilla. This iconic fragrance is perfect for those who appreciate elegance and sophistication.",
          "price": 199.99,
          "offerPrice": 149.99,
          "image": [
            "https://www.chanel.com/images/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9564912943134.jpg",
          ],
          "category": "Floral",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a209bab3db72db5cc77b35"
      }
    ],
    "amount": 156.99,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "Adoodevv",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672560698,
    "__v": 0
  }
]

export const addressDummyData = [
  {
    "_id": "67a1e4233f34a77b6dde9055",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "fullName": "GreatStack",
    "phoneNumber": "0123456789",
    "pincode": 654321,
    "area": "Main Road , 123 Street, G Block",
    "city": "City",
    "state": "State",
    "__v": 0
  }
]