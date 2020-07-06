<template>
  <div>
    <v-menu offset-y nudge-bottom="5">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark :height="size" :width="size" v-bind="attrs" v-on="on">
          <v-avatar color="accent" :size="size" class="title">
            <span v-if="selectedUserInitials">{{ selectedUserInitials }}</span>
            <v-icon large v-else>mdi-account</v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <v-list dense>
        <v-subheader>Users</v-subheader>
        <div v-if="users.length">
          <v-list-item
            v-for="user in users"
            :key="user.id"
            @click="SetSelectedUserId(user.id)"
          >
            <v-list-item-title
              :class="{ 'text--accent': user.id === selectedUserId }"
            >
              {{ user.first_name }} {{ user.last_name }}
            </v-list-item-title>
            <v-list-item-icon>
              <v-btn small icon @click.stop="onDeleteUser(user.id)">
                <v-icon size="20" color="error">mdi-close</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </div>

        <v-list-item @click="addUserDialog = true">
          <v-list-item-title class="text--secondary">
            Add a new user
          </v-list-item-title>
          <v-list-item-icon>
            <v-btn small icon depressed>
              <v-icon size="24" color="secondary">mdi-plus</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>

    <UserDialogAdd :is-active="addUserDialog" @close="addUserDialog = false" />

    <UserDialogDelete
      :is-active="Boolean(deletingUserId)"
      :user-id="deletingUserId"
      @close="deletingUserId = ''"
    />
  </div>
</template>

<script>
import User from "@/models/User";
import { mapGetters, mapActions } from "vuex";
import UserDialogAdd from "@/components/UserDialogAdd";
import UserDialogDelete from "@/components/UserDialogDelete";

export default {
  components: { UserDialogAdd, UserDialogDelete },
  data() {
    return {
      size: 50,
      addUserDialog: false,
      deletingUserId: ""
    };
  },

  computed: {
    ...mapGetters(["selectedUserId"]),

    users() {
      return User.all();
    },

    selectedUserInitials() {
      if (this.users.length) {
        const user = User.find(this.selectedUserId) || this.users[0];
        return user.first_name.substr(0, 1) + user.last_name.substr(0, 1);
      } else return "";
    }
  },

  methods: {
    ...mapActions(["SetSelectedUserId"]),

    onDeleteUser(id) {
      this.deletingUserId = id;
    },

    initSelectedUser() {
      if (!this.selectedUserId && this.users.length) {
        this.SetSelectedUserId(this.users[0].id);
      }
    }
  },

  created() {
    this.initSelectedUser();
  }
};
</script>
