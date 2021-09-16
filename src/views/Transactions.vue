<template>
  <div>
    <div class="headerTransactions">
      <header-transactions />
      <new-transactions-modal />
    </div>
    <summary-transactions />
    <transactions-table />
  </div>
</template>

<script>
import SummaryTransactions from "../components/SummaryTransactions.vue";
import HeaderTransactions from "../components/HeaderTransactions.vue";
import NewTransactionsModal from "../components/NewTransactionsModal.vue";
import TransactionsTable from "../components/TransactionsTable.vue";

export default {
  name: "transactions-app",
  components: {
    SummaryTransactions,
    HeaderTransactions,
    NewTransactionsModal,
    TransactionsTable
  }
};
</script>

<style>
* {
  margin: 0%;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialised;
}

body,
input,
textarea,
button {
  font-family: "Poppins", sans-serif;
  font-weight: 480;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

.headerTransactions {
  display: flex;
  justify-content: space-between;
  padding: 4rem 16rem;
  height: 240px;
  background-color: #caffd3;
}
</style>
