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
        // Valor inicial: si está vacío, se asigna un espacio para conservar el tamaño
        preview.textContent = prefix + (field.value || ' ');
        // Escuchar cambios en el campo
        field.addEventListener('input', () => {
          preview.textContent = prefix + field.value;
          preview.classList.add('animate-update');
          setTimeout(() => preview.classList.remove('animate-update'), 300);
          // Resalta el borde de la vista previa (se mantiene)
          highlightPreview();
        });
      }
    };
  
    // Actualizar los campos correspondientes en la vista previa
    updatePreview('name', 'previewName');
    updatePreview('breed', 'previewBreed', 'Raza: ');
    updatePreview('age', 'previewAge', 'Edad: ');
    updatePreview('weight', 'previewWeight', 'Peso (kg): ');
    updatePreview('disease', 'previewDisease', 'Enfermedad: ');
    
    // Actualizar el estado (select) en la vista previa
    const stateField = document.getElementById('state');
    const statePreview = document.getElementById('previewState');
    if (stateField && statePreview) {
      statePreview.textContent = 'Estado: ' + stateField.value;
      stateField.addEventListener('change', () => {
        statePreview.textContent = 'Estado: ' + stateField.value;
        statePreview.classList.add('animate-update');
        setTimeout(() => statePreview.classList.remove('animate-update'), 300);
        highlightPreview();
      });
    }
    
    // Actualizar la imagen de vista previa
    const photoField = document.getElementById('photo');
    const previewImage = document.getElementById('previewImage');
    if (photoField && previewImage) {
      previewImage.src = photoField.value || previewImage.src;
      photoField.addEventListener('input', () => {
        previewImage.src = photoField.value || previewImage.src;
        previewImage.classList.add('animate-update');
        setTimeout(() => previewImage.classList.remove('animate-update'), 300);
        highlightPreview();
      });
    }
  });
  