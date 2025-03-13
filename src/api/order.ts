import apiClient from "./api";

export interface Order {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  paymentType: string;
  childId: number;
}

export const getUrlPayment = async (url: string, data: Order) => {
  const response = await apiClient.post(
    `/order/create-by-product?${url}`,
    data
  );
  console.log(123,response.data);
  const urlpayment = await apiClient.post(
    `/payment/multiple/create-payment?productIds=${response?.data?.result?.id}`,
    data
  );
  console.log(urlpayment.data);

  return urlpayment.data;
};
export const getOrders = async () => {
  const response = await apiClient.get(`/order/user-orders`);
  return response.data;
};

export const getOrderById = async (id: string) => {
  const response = await apiClient.get(`/order/order/${id}`);
  return response.data;
};
