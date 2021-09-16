<template>
  <div class="containerHeaderTransactions">
    <div class="logoName">
      <img src="../assets/logo.png" alt="Logo" />
      MoneyVue
    </div>
  </div>
</template>

<script>
export default {
  name: "header-transactions"
};
</script>

<style>
.logoName {
  display: flex;
  align-items: center;
  font-size: 40px;
  color: rgb(10, 109, 10);
  font-weight: 700;
}

.containerHeaderTransactions img {
  width: 4rem;
  margin-right: 10px;
}
</style>
