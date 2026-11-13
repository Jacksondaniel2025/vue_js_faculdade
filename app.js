const { createApp } = Vue;

createApp({
  components: { ProductCard },
  data() {
    return {
      search: "",
      cartCount: 0,
      products: [
        { id: 1, name: "Vaso de Cerâmica", price: 54.90, image: "images/vaso.jpg" },
        { id: 2, name: "Cesto de Palha", price: 42.00, image: "images/cesto.jpg" },
        { id: 3, name: "Tábua de Madeira", price: 69.90, image: "images/tabua.jpg" },
        { id: 4, name: "Tigela de Cerâmica", price: 36.00, image: "images/tigela.jpg" }
      ]
    };
  },
  computed: {
    filteredProducts() {
      const term = this.search.trim().toLocaleLowerCase("pt-BR");
      return this.products.filter(product =>
        product.name.toLocaleLowerCase("pt-BR").includes(term)
      );
    }
  },
  methods: {
    addToCart() {
      this.cartCount += 1;
    }
  }
}).mount("#app");
