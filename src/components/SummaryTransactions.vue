<template>
  <div>
    <div class="containerSummary">
      <div class="slotHeaderIncome">
        <header class="headerIncome">
          <p class="headerText">
            Entradas <img src="../assets/income.svg" alt="Entradas" />
          </p>

          <div>
            <strong> R$ {{ transactionsAmounts.deposits }}</strong>
          </div>
        </header>
      </div>

      <div class="slotHeaderOutcome">
        <header class="headerOutcome">
          <p class="headerText">
            Saídas <img src="../assets/outcome.svg" alt="Saídas" />
          </p>

          <div>
            <strong> - R$ {{ transactionsAmounts.withdraws }}</strong>
          </div>
        </header>
      </div>

      <div class="slotHeaderTotal">
        <header class="headerTotal">
          <p class="headerText">
            Total <img src="../assets/total.svg" alt="Total" />
          </p>

          <div class="amountTotal">
            <strong> R$ {{ transactionsAmounts.total }} </strong>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "summary-transactions",
  computed: {
    transactionsAmounts() {
      return this.$store.state.transactionsAmounts;
    }
  }
};
</script>

<style>
.containerSummary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -11rem;
  padding: 6rem 16rem;
}

header {
  align-items: center;
  justify-content: space-evenly;
  height: 120px;
  border-radius: 8px;
}

img {
  width: 2rem;
  margin-left: 10px;
}

.headerText {
  font-size: 2.2rem;
  display: flex;
  align-items: center;
}

.headerIncome {
  background-color: white;
}

.headerOutcome {
  background-color: white;
}

.headerTotal {
  background: rgb(14, 158, 14);
  color: white;
}

.headerTotal,
.headerIncome,
.headerOutcome {
  display: flex;
  flex-direction: column;
}

strong {
  font-size: 2rem;
  font-weight: 500;
}
</style>
