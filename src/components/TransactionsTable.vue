<template>
  <div class="transactionsTable">
    <table>
      <thead>
        <tr>
          <th>Titúlo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.title }}</td>
          <td>R$ {{ transaction.amount }}</td>
          <td>{{ transaction.category }}</td>
          <td>
            {{ new Date().toLocaleDateString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "transactions-table",
  computed: {
    transactions() {
      return this.$store.state.transactions;
    }
  }
};
</script>

<style>
.transactionsTable {
  padding: 0 18rem;
}

table {
  width: 100%;
  border-spacing: 0 1rem;
}
th {
  font-weight: 400;
  padding: 1rem 4rem;
  text-align: left;
  color: rgb(141, 141, 141);
}

td {
  padding: 1rem 4rem;
  border: 0;
}
</style>
