import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import DeliveryManagement from "./pages/DeliveryManagement/DeliveryManagement";
import DeliveryTaskTable from "./pages/DeliveryManagement/DeliveryTaskTable";
import DeliveryTaskcreateForm from "./pages/DeliveryManagement/DeliveryTaskcreateForm";
import DeliveryTaskUpdateForm from "./pages/DeliveryManagement/DeliveryTaskUpdateForm";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DeliveryManagement />} />
      <Route path="/Taskpage" element={<DeliveryTaskTable />} />
      <Route path="/Create" element={<DeliveryTaskcreateForm />} />
      <Route path="/Update" element={<DeliveryTaskUpdateForm />} />
      
    </Routes>
    </BrowserRouter>
  )
}
