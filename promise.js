// Building an Iceream production simulation
// We call this the callBack hell ice cream production

let stocks = {
    fruits: ["Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  let is_shop_open = true;
  
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject("Our Shop is closed");
      }
    });
  };
  
  order(2000, () => {
    document.querySelector('#first').innerHTML = `${stocks.fruits[0]} was selected`;
  })
  
  .then(() => {
    return order(0, () => {
      document.querySelector('#second').innerHTML = 'Production has started';
    });
  })
  
  .then(() => {
    return order(2000, () => {
      document.querySelector('#third').innerHTML = 'The food was chopped';
    });
  })
  
  .then(() => {
    return order(1000, () => {
      document.querySelector('#fourth').innerHTML = `${stocks.liquid[0]} and ${stocks.liquid[1]} was added`;
    });
  })
  
  .then(() => {
    return order(1000, () => {
      document.querySelector('#fifth').innerHTML = 'The Machine has started';
    });
  })
  
  .then(() => {
    return order(2000, () => {
      document.querySelector('#sixth').innerHTML = `Ice cream was placed on ${stocks.holder[0]}`;
    });
  })
  
  .then(() => {
    return order(3000, () => {
      document.querySelector('#seventh').innerHTML = `${stocks.toppings[0]} was added as toppings`;
    });
  })
  
  .then(() => {
    return order(2000, () => {
      document.querySelector('#eighth').innerHTML = 'Serve the Ice cream';
    });
  })
  
  .catch((error) => {
    document.querySelector('#catch').innerHTML = error;
  })
  
  .finally(() => {
   
 document.querySelector('.finally').innerText = "Day ended, Shop is closed"
 
});
  