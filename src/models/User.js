import { Model } from "@vuex-orm/core";
import Todo from "./Todo";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.uid(),
      first_name: this.string(""),
      last_name: this.string(""),
      // relationships
      todos: this.hasMany(Todo, "user_id")
    };
  }
}
