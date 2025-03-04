import { BillingInfo, ShippingInfo } from './AddressInfo';
import OrderItem from './OrderItem';
import ShippingFeeInfo from './ShippingFeeInfo';

class Order {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.orderSequenceId = data.orderSequenceId;

    this.status = data.status;
    this.paymentStatus = data.paymentStatus;
    this.orderStatus = data.orderStatus;
    this.deliveryStatus = data.deliveryStatus;

    this.customerId = data.customerId;
    this.sellerId = data.sellerId;
    this.sellerName = data.sellerName;
    this.orderItems = (data.orderItems || []).map((e) => new OrderItem(e));

    this.shippingInfo = data.shippingInfo
      ? new ShippingInfo(data.shippingInfo)
      : null;
    this.billingInfo = data.billingInfo
      ? new BillingInfo(data.billingInfo)
      : null;
    this.deliveryDate = data.deliveryDate;
    this.discountInfo = data.discountInfo;

    this.totalAmount = data.totalAmount;
    this.discountAmount = data.discountAmount;
    this.netAmount = data.netAmount;
    this.totalRefundAmount = data.totalRefundAmount;
    this.couponDiscount = data.couponDiscount;
    this.shippingFee = data.shippingFee;
    this.shippingFeeInfo = data.shippingFeeInfo
      ? new ShippingFeeInfo(data.shippingFeeInfo)
      : null;
    this.shippingProvider = data.shippingProvider;

    this.currencyCode = data.currencyCode;
    this.languageCode = data.languageCode;
    this.marketCode = data.marketCode;

    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.updatedAt = data.updatedAt;
    this.updatedBy = data.updatedBy;
  }
}

export default Order;
