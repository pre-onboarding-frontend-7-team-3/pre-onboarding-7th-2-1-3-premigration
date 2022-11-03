export const reducerUtils = {
  default: () => ({
    loading: false,
    data: null,
    error: null,
  }),
  loading: (prev = null) => ({
    loading: true,
    data: prev,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};
