// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case "CREATE": {
      return [...posts, action.payload];
    }

    case "FETCH_ALL": {
      return action.payload;
    }

    case "UPDATE": {
      return posts.map((post) => {
        return post._id === action.payload._id ? action.payload : post;
      });
    }

    case "DELETE": {
      console.log(action.payload);
      return posts.filter((post) => post._id !== action.payload);
    }
    default:
      return posts;
  }
};
