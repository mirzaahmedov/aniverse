export type ResultsPaginationType = {
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};
export type MultiResultsType<T extends Record<string, unknown>> = {
  data: T[];
  pagination: ResultsPaginationType;
};
export type SingleResultType<T extends Record<string, unknown>> = {
  data: T;
};
