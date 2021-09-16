import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    transactionsAmounts: {
      deposits: 0,
      withdraws: 320,
      total: 0
    },
    transactions: [
      {
        id: 1,
        title: "Compras comida",
        amount: 320,
        category: "Alimentação",
        type: "withdraw"
      }
    ]
  },
  mutations: {
    addTransaction(state, transaction) {
      state.transactions.push({
        id: transaction.id,
        title: transaction.title,
        amount: transaction.amount,
        category: transaction.category,
        type: transaction.type
      });

      if (transaction.type == "deposit") {
        state.transactionsAmounts.deposits += Number.parseFloat(transaction.amount);
        state.transactionsAmounts.total += Number.parseFloat(transaction.amount);
      } else {
        state.transactionsAmounts.withdraws += Number.parseFloat(transaction.amount);
        state.transactionsAmounts.total -= Number.parseFloat(transaction.amount);
      }
    },
    deleteTransaction(state, id) {
      const index = state.transaction.findIndex(item => item.id == id);
      state.transaction.splice(index, 1);
    }
  },
  actions: {
    addTransaction(context, transaction) {
      console.log("add");
      setTimeout(() => {
        context.commit("addTransaction", transaction);
      }, 100);
    },
    deleteTransaction(context, id) {
      setTimeout(() => {
        context.commit("deleteTransaction", id);
      }, 100);
    }
  }
});

export default store;
