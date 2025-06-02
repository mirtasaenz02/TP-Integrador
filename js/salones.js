// salones.js

export const SALONES_KEY = 'salones_eventos';

const salonesIniciales = [
  { id: '1', nombre: 'Salón Colonial', 
      descripcion: 'Un espacio elegante, con detalles de madera y grandes ventanales. Ideal para eventos sofisticados en un ambiente clásico y cálido.', 
      capacidad: 50, 
      direccion: 'Av. del Libertador 1250 - CABA' },
  { id: '2', nombre: 'Salón Embajador', 
      descripcion: 'De elegante diseño contemporáneo, sus detalles refinados y una atmósfera de distinción hacen el perfecto escanario para eventos de alto nivel.', 
      capacidad: 100, 
      direccion: 'San Martín 234 - CABA' },
];

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
  salon.id = salon.id || crypto.randomUUID();

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
