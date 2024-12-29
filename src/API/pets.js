import instance from "./index";

async function getAllPets() {
  const response = await instance.get("/pets");
  console.log("getAllPets", response);
  return response;
}

async function getPetById(id) {
  const response = await instance.get(`/pets/${id}`);
  console.log("getPetById", response);
  return response;
}

async function addNewPet(data) {
  const response = await instance.post("/pets", data);
  console.log("addNewPet", response);
  return response;
}

async function deletePet(id) {
  const response = await instance.delete(`/pets/${id}`);
  console.log("deletePet", response);
  return response;
}

export { getAllPets, getPetById, addNewPet, deletePet };
