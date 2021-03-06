export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsLoaded(contacts));
    });
  };
}
function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function loadContact(id) {
  return function (dispatch) {
    fetch("/contacts/:id")
    .then( (response) => {
      return response.json();
    }).then((contact) => {
      dispatch(contactLoaded(contact));
    });
  };
}
function contactLoaded(contact) {
  return {
    type: "CONTACT_LOADED",
    value: contact
  };
}

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function loadVehicle() {
  return function (dispatch) {
    fetch("/vehicles/:id")
    .then( (response) => {
      return response.json();
    }).then((vehicle) => {
      dispatch(vehicleLoaded(vehicle));
    });
  };
}
function vehicleLoaded(vehicle) {
  return {
    type: "VEHICLE_LOADED",
    value: vehicle
  };
}

export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}
function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

export function loadComment() {
  return function (dispatch) {
    fetch("/comments/:id")
    .then( (response) => {
      return response.json();
    }).then((comment) => {
      dispatch(commentLoaded(comment));
    });
  };
}
function commentLoaded(comment) {
  return {
    type: "COMMENTS_LOADED",
    value: comment
  };
}

export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
    .then( (response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
}
function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

export function loadProduct() {
  return function (dispatch) {
    fetch("/products/:id")
    .then( (response) => {
      return response.json();
    }).then((product) => {
      dispatch(productLoaded(product));
    });
  };
}
function productLoaded(product) {
  return {
    type: "PRODUCT_LOADED",
    value: product
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}
export function createContact(c) {
  console.log(c);
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}
export function createVehicle(v) {
  console.log(v);
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function createComment(v) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadComments()));
  };
}
