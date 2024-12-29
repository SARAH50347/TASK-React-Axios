import { useState } from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  const [selectedPet, setSelectedPet] = useState(249);

  const handlePetDeleted = () => {
    setSelectedPet(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-mono">
        <Navbar />
        <Home />
        <PetList setSelectedPet={setSelectedPet} />
        <PetDetail
          handlePetDeleted={handlePetDeleted}
          selectedPet={selectedPet}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
