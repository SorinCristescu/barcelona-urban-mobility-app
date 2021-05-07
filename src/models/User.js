import Adapters from 'next-auth/adapters';

// Extend the built-in models using class inheritance
export default class User extends Adapters.TypeORM.Models.User.model {
  // You can extend the options in a model but you should not remove the base
  // properties or change the order of the built-in options on the constructor
  favorites;
  constructor(name, image, email, favorites) {
    super(name, image, email, favorites);
    if (favorites) this.customField = favorites;
  }
}

/* UserSchema will correspond to a collection in your MongoDB database. */
export const UserSchema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    // Add your own properties to the User schema
    favorites: {
      type: [Object],
    },
  },
};
