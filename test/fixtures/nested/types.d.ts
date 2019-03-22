namespace nested {
  namespace shallow {
    type ICreateParams = { name?: string };
  }

  namespace deep {
    namespace deeper {
      type IListParams = { token?: string };
    }
  }
}

export default nested;
