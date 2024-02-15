import Services from "../models/Services.js";
import { validateObjectId, handleNotFoundError } from "../utils/index.js";

const createService = async (req, res) => {
  if (Object.values(req.body).includes("")) {
    const error = new Error("todos los campos son obligatorios");
    return res.status(400).json({ msg: error.message });
  }
  try {
    const service = new Services(req.body);
    await service.save();
    res.json({ msg: "servicio creado" });
  } catch (error) {
    console.log(error);
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    console.log(error);
  }
};

const getServiceById = async (req, res) => {
  const id = req.params.id;
  if (validateObjectId(id, res)) return;
  const service = await Services.findById(id);
  if (handleNotFoundError(service, res)) return;
  res.json(service);
};

const updateService = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  if (validateObjectId(id, res)) return;
  const service = await Services.findById(id);
  if (handleNotFoundError(service, res)) return;
  try {
    service.name = name || service.name;
    service.price = price || service.price;
    await service.save();
    res.json({ msg: "actualizando servicio" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const deleteService = async (req, res) => {
  const id = req.params.id;
  if (validateObjectId(id, res)) return;
  const service = await Services.findById(id);
  if (handleNotFoundError(service, res)) return;
  try {
    await service.deleteOne();
    res.json({ msg: "servicio eliminado" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
};
