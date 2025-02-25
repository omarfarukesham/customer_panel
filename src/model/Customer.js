class Customer {
  constructor(data) {
    this.id = data.id;
    this.status = data.status;
    this.name = data.name;
    this.image = data.image;
    this.description = data.description;
    this.userId = data.userId;
    this.username = data.username;
    this.email = data.email;
    this.phone = data.phone;
    this.customerGroupId = data.customerGroupId;
    this.role = data.role;
    this.userInfo = data.userInfo;
    this.billingAddress = data.billingAddress;
    this.shippingAddress = data.shippingAddress;
    this.dob = data.dob ? new Date(data.dob) : null;
    this.gender = data.gender;
  }
}
export default Customer;
