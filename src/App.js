import Container from "react-bootstrap/Container";
import {Button, Stack } from "react-bootstrap"
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  return (
  <div>
    <Container>
     <Stack direction="horizontal" gap="2" className="mb-4">
       <h1 className="mb-auto">Budgets</h1>
       <Button variant="primary">Add Budget</Button>
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
       <BudgetCard name="Entertainment" amount={300} max={1000}></BudgetCard>
     </div>
   </Container>
   <AddBudgetModal show />
  </div>
 
  );
}

export default App;
