// salones.js

export const SALONES_KEY = 'salones_eventos';

export function inicializarLocalStorage() {
  if (!localStorage.getItem(SALONES_KEY)) {
    localStorage.setItem(SALONES_KEY, JSON.stringify(salonesIniciales));
  }
}

export function obtenerSalones() {
  return JSON.parse(localStorage.getItem(SALONES_KEY)) || [];
}

export function guardarSalones(salones) {
  localStorage.setItem(SALONES_KEY, JSON.stringify(salones));
}

export function agregarSalon(salon) {
  const salones = obtenerSalones();
  salon.id = crypto.randomUUID();
  salones.push(salon);
  guardarSalones(salones);
}

export function eliminarSalon(id) {
  const salones = obtenerSalones().filter(salon => salon.id !== id);
  guardarSalones(salones);
}

export function actualizarSalon(salonActualizado) {
  const salones = obtenerSalones().map(salon =>
    salon.id === salonActualizado.id ? salonActualizado : salon
  );
  guardarSalones(salones);
}
