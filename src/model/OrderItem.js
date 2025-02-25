import ProductInfo from './ProductInfo';

class OrderItem {
  constructor(data) {
    this.id = data.id;
    this.productInfo = data.productInfo
      ? new ProductInfo(data.productInfo)
      : null;
    this.quantity = data.quantity;
    this.total = data.total;
    this.campaignId = data.campaignId;
    this.discountInfo = data.discountInfo;
    this.itemDeliveryStatus = data.itemDeliveryStatus;
  }
}

export default OrderItem;
