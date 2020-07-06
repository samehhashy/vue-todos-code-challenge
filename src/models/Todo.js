import { Model } from "@vuex-orm/core";

export default class Todo extends Model {
  static entity = "todos";

  static fields() {
    return {
      id: this.uid(),
      user_id: this.attr(null),
      title: this.string(""),
      color: this.string(""),
      is_done: this.boolean(false)
    };
  }
}
