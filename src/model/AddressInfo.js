class AddressInfo {
  constructor(data) {
    this.personName = data.personName;
    this.email = data.email;
    this.phone = data.phone;
    this.countryName = data.countryName;
    this.stateName = data.stateName;
    this.zoneName = data.zoneName;
    this.areaName = data.areaName;
    this.details = data.details;
  }
}

export default AddressInfo;

export class ShippingInfo extends AddressInfo {
  constructor(data) {
    super(data);
  }
}
export class BillingInfo extends AddressInfo {
  constructor(data) {
    super(data);
  }
}
