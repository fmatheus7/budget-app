import Container from "react-bootstrap/Container";
import {Button, Stack } from "react-bootstrap"
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react"
import { useBudgets } from "./contexts/BudgetsContext";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] =useState(false)
  const { budgets, getBudgetsExpenses } = useBudgets()
  return (
  <div>
    <Container>
     <Stack direction="horizontal" gap="2" className="mb-4">
       <h1 className="mb-auto">Budgets</h1>
       <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
       <Button variant="outline-primary">Add Budget</Button>
     </Stack>
     <div
       style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
        alignItems: "flex-start",
     }}
     >
       {budgets.map(budget => {
       const amount = getBudgetsExpenses(budget.id).reduce((total, expense) => total + expense.amount,
       0)
       return (
        <BudgetCard
          key={budget.id}
          name={budget.name}
          gray
          amount={amount}
          max={budget.max}
         />
       )
      })}
     </div>
   </Container>
   <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
  </div>
 
  );
}

export default App;
