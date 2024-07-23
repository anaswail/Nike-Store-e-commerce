const wrapper = document.querySelector(".sliderwrapper");
const menuItem = document.querySelectorAll(".menuItem");

// Product array

const products = [
  // First Product
  {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./image/air.png",
      },
      {
        code: "darkblue",
        img: "./image/air2.png",
      },
    ],
  },

  // Second Product
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./image/jordan.png",
      },
      {
        code: "green",
        img: "./image/jordan2.png",
      },
    ],
  },

  // Thered Product
  {
    id: 3,
    title: "Blazer",
    price: 186,
    colors: [
      {
        code: "lightgray",
        img: "./image/blazer.png",
      },
      {
        code: "green",
        img: "./image/blazer2.png",
      },
    ],
  },

  // Fourth Product
  {
    id: 4,
    title: "crater",
    price: 209,
    colors: [
      {
        code: "black",
        img: "./image/crater.png",
      },
      {
        code: "lightgray",
        img: "./image/crater2.png",
      },
    ],
  },

  // Fifth Product
  {
    id: 5,
    title: "Hippie",
    price: 165,
    colors: [
      {
        code: "gray",
        img: "./image/hippie.png",
      },
      {
        code: "black",
        img: "./image/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-index * 100}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Change texts of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = `$${choosenProduct.price}`;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Update buy product window items
    document.querySelector(".productWindowImg").src =
      choosenProduct.colors[0].img;
    document.querySelector(".buyTitle").textContent = choosenProduct.title;
    document.querySelector(
      ".buyPrice"
    ).textContent = `$${choosenProduct.price}`; // Update price here

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// Buy Button
const buyButton = document.querySelectorAll(".buyBtn");
buyButton.forEach((button) => {
  button.addEventListener("click", () => {
    scrollBy({
      top: 1250,
      behavior: "smooth",
    });
    document.querySelector(
      ".totalPrice"
    ).textContent = `$${choosenProduct.price}`;
  });
});

// sizes
currentProductSizes.forEach((size, indnex) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((ele) => {
      ele.style.backgroundColor = "white";
      ele.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// UpButton
let upButton = document.querySelector(".upButton");
window.onscroll = () => {
  if (scrollY >= 800) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
};

upButton.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// buy the product
const productButton = document.querySelector(".productButton");
productButton.addEventListener("click", () => {
  document.querySelector(".buyProductWindow").style.width = "100vw";
});

const closeProductWindow = document.querySelector(".closeProductWindow");
closeProductWindow.addEventListener("click", () => {
  document.querySelector(".buyProductWindow").style.width = "0";
});

// Get the total price
let price = choosenProduct.price;
let productCount = document.querySelector(".productCount");
let totalPrice = document.querySelector(".totalPrice");

productCount.addEventListener("keyup", () => {
  let total = price * productCount.value;
  totalPrice.innerHTML = `$${total}`;
});

// sned the product to whatsapp
const name = document.querySelector('.formName');
const phoneNumber = document.querySelector('.formNumber');
const address = document.querySelector('.formAdress');
const sendButton = document.querySelector('.buyButton');
let Mynumber = "+201050305754";

sendButton.addEventListener("click", () => {
  var url = "https://wa.me/" + Mynumber + "?text="
  + "Hello Iam Coming From Nike Store 👋" + "%0a"
  + "Name : " + name.value + "%0a"
  + `==================` + "%0a"
  + "phoneNumber : " + phoneNumber.value + "%0a"
  + "==================" + "%0a"
  + "address : " + address.value + "%0a"
  + "==================" + "%0a"
  + "Product Name : " + choosenProduct.title + "%0a"
  + "==================" + "%0a"
  + "Count : " + productCount.value + "%0a"
  + "==================" + "%0a"
  + "Price : " + price + "%0a"
  + "==================" + "%0a"
  + "Total Price : " + totalPrice.innerHTML + "%0a%0a";
  window.open(url, '_blank').focus();
})
