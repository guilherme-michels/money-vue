<template>
  <div class="containerNewTransactionsModal">
    <button type="button" class="newTransactionBtn" @click="showModal">
      Nova transação
    </button>
    <div class="modalContainer" v-show="isModalVisible">
      <div class="modal">
        <header class="modalHeader">
          <slot name="header">
            <h2>Cadastrar transação</h2>
          </slot>
          <button type="button" class="closeBtn" @click="closeModal">
            x
          </button>
        </header>

        <section class="modalBody">
          <slot name="body">
            <input
              placeholder="Título"
              class="inputTitle"
              v-model="newTransactionTitle"
            />
            <input
              placeholder="Valor"
              type="number"
              class="inputValue"
              v-model="newTransactionAmount"
            />
          </slot>
        </section>

        <footer class="modalFooter">
          <div name="footer" class="footerSlot">
            <button
              @click="joinBtnIsActive"
              :class="[isActive ? 'joinActiveBtn' : '']"
            >
              <img src="../assets/income.svg" alt="Entrada" />
              <span>Entrada</span>
            </button>

            <button
              @click="exitBtnIsActive"
              :class="[!isActive ? 'exitActiveBtn' : '']"
            >
              <img src="../assets/outcome.svg" alt="Saída" />
              <span>Saída</span>
            </button>
          </div>
          <input
            placeholder="Categoria"
            class="inputCategory"
            v-model="newTransactionCat"
          />
          <button type="submit" class="submitBtn" @click="addTransaction">
            Cadastrar
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-transactions-modal",
  data() {
    return {
      isModalVisible: false,
      newTransactionTitle: "",
      newTransactionAmount: 0,
      idForTransaction: 2,
      newTransactionCat: "",
      newTransactionType: "deposit",
      isActive: true
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addTransaction() {
      if (
        (this.newTransactionAmount != 0 &&
          (this.newTransactionType == "deposit" ||
            this.newTransactionType == "withdraw"),
        this.newTransactionTitle.length > 0 &&
          this.newTransactionCat.length > 0)
      ) {
        this.$store.dispatch("addTransaction", {
          id: this.idForTransaction,
          title: this.newTransactionTitle,
          amount: this.newTransactionAmount,
          category: this.newTransactionCat,
          type: this.newTransactionType
        });
        (this.newTransaction = ""),
          this.idForTransaction++,
          (this.isModalVisible = false),
          (this.newTransactionTitle = ""),
          (this.newTransactionAmount = 0),
          (this.idForTransaction = 2),
          (this.newTransactionCat = ""),
          (this.newTransactionType = "deposit"),
          (this.isActive = true);
      }
    },
    setTransactionType() {
      if (this.newTransaction.trim().length == 0) {
        return;
      }
      this.$store.dispatch("setTransactionType", {
        type: this.newTransactionType
      });
    },
    joinBtnIsActive() {
      this.isActive = true;
      this.newTransactionType = "deposit";
    },
    exitBtnIsActive() {
      this.isActive = false;
      this.newTransactionType = "withdraw";
    }
  }
};
</script>

<style>
.newTransactionBtn {
  font-size: 1rem;
  background-color: rgb(7, 110, 7);
  color: #fff;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: 0.2s;
}

.newTransactionBtn:hover {
  background-color: rgb(14, 158, 14);
}

.modalContainer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.356);
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.modal {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 2px 20px 1px;
  width: 620px;
  height: 620px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modalHeader,
.modalFooter {
  padding: 2rem;
  display: flex;
}

.modalHeader {
  position: relative;
  justify-content: space-between;
  color: rgb(51, 51, 51);
}

.modalFooter {
  flex-direction: column;
  justify-content: flex-end;
  font-size: 3rem;
}

.modalFooter img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.joinBtn {
  margin-right: 1rem;
}

.modalBody {
  position: relative;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
}

.modalBody input {
  width: 100%;
  padding: 0 1.5rem;
  height: 3.8rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 18px;
}

.inputTitle {
  margin-bottom: 2rem;
}

.inputCategory {
  width: 100%;
  padding: 0 1.5rem;
  height: 3.8rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 18px;
  margin-bottom: 2rem;
}

.closeBtn {
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  font-size: 20px;
  padding: 20px;
  color: rgb(151, 151, 151);
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.footerSlot button {
  height: 3.4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  font-size: 20px;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
}

.footerSlot {
  display: flex;
}

.submitBtn {
  height: 4rem;
  border: none;
  background-color: #33cc95;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  transition: 0.2s;
}

.submitBtn:hover {
  background-color: #33ad81;
}

.joinActiveBtn {
  background-color: rgb(165, 233, 199);
}

.exitActiveBtn {
  background-color: rgb(231, 157, 157);
}
</style>
