document.addEventListener('DOMContentLoaded', function() {
    const previewContainer = document.querySelector('.preview-container');
  
    // Función para resaltar permanentemente el borde de la vista previa
    const highlightPreview = () => {
      if (!previewContainer) return;
      previewContainer.classList.add('highlight-border');
    };
  
    // Función genérica para actualizar el contenido de un elemento en la vista previa
    const updatePreview = (fieldId, previewId, prefix = '') => {
      const field = document.getElementById(fieldId);
      const preview = document.getElementById(previewId);
      if (field && preview) {
        // Se asigna un espacio en blanco si el campo está vacío para conservar el espacio
        preview.textContent = prefix + (field.value || ' ');
        field.addEventListener('input', () => {
          preview.textContent = prefix + field.value;
          preview.classList.add('animate-update');
          setTimeout(() => preview.classList.remove('animate-update'), 300);
          // Una vez activado, el borde iluminado se mantiene
          highlightPreview();
        });
      }
    };
  
    // Actualizar los campos de la vista previa:
    updatePreview('cardId', 'previewCedula', 'Cédula: ');
    updatePreview('name', 'previewName');
    updatePreview('cellphone', 'previewCellphone', 'Celular: ');
    updatePreview('email', 'previewEmail', 'Correo: ');
  });
  