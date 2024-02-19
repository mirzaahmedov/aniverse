export type PaginationFullType = {
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};
export type PaginationType = {
  last_visible_page: number;
  has_next_page: boolean;
};
export type MultiResultsType<T, P = undefined> = {
  data: T[];
  pagination: P;
};
export type SingleResultType<T> = {
  data: T;
};

export type FetchResultType<T> =
  | {
      ok: true;
      result: T;
    }
  | {
      ok: false;
      message: string;
    };

export type ErrorResponseType = {
  status: number;
  type: string;
  message: string;
  error: string;
  report_url: string;
};
