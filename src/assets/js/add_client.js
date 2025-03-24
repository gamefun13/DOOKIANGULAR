// Función genérica para actualizar el contenido de un elemento en la vista previa
const updatePreview = (fieldId, previewId, prefix = '') => {
  const field = document.getElementById(fieldId);
  const preview = document.getElementById(previewId);
  if (field && preview) {
    // Valor inicial: si está vacío se reserva espacio
    preview.textContent = prefix + (field.value || ' ');
    field.addEventListener('input', () => {
      preview.textContent = prefix + field.value;
      preview.classList.add('animate-update');
      setTimeout(() => preview.classList.remove('animate-update'), 300);
      highlightPreview();
    });
  }
};

// Actualizar los campos de la vista previa
updatePreview('name', 'previewName');
updatePreview('cardId', 'previewCedula', 'Cédula: ');  // <-- Resolved version
updatePreview('cellphone', 'previewCellphone', 'Celular: ');
updatePreview('email', 'previewEmail', 'Correo: ');
