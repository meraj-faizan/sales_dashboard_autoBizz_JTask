export interface ISale {
  _id: string;
  date: string;
  price: number;
  customerEmail: string;
  customerPhone: string;
  __v: number;
}

export interface ITotalSale {
  day: string;
  totalSale: number;
}

export interface SalesPagination {
  before?: string;
  after?: string;
}

export interface SalesResponse {
  results: {
    TotalSales: ITotalSale[];
    Sales: ISale[];
  };
  pagination: SalesPagination;
}

export interface TokenResponse {
  token: string;
  expire: number;
}

export interface ISalesQuery {
  startDate: string;
  endDate: string;
  priceMin?: string | number;
  email?: string;
  phone?: string;
  sortBy: "date" | "price";
  sortOrder: "asc" | "desc";
  before?: string;
  after?: string;
}
