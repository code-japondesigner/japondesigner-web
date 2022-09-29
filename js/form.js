

new Vue({
  name: "#form",
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      files: [],
      isSuccess: false,
    };
  },
  methods: {
    processFile(event) {
      this.files = event.target.files[0];
    },
    onSubmit() {
      if (this.loading) return;
      this.loading = true;
      const formData = new FormData();
      formData.append("file", this.files);
      formData.append("name", this.name);
      formData.append("email", this.email);

      axios
        .post(
          "https://getform.io/f/ca727888-a878-4dd1-a354-ca32a41c57f1",
          formData,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then(
          (response) => {
            this.isSuccess = response.data.success;
            this.name = "";
            this.email = "";
            this.files = "";
            this.loading = false;
          },
          (response) => {
            // Error
          }
        );
    },
  },
})
