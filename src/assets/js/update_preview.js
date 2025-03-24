document.addEventListener('DOMContentLoaded', function() {
    const previewContainer = document.querySelector('.preview-container');
  
    // Función para resaltar la vista previa con un borde iluminado PERMANENTE
    const highlightPreview = () => {
      if (!previewContainer) return;
      previewContainer.classList.add('highlight-border');
    };
  
    // Función genérica para actualizar texto en la vista previa con prefijo
    const updatePreview = (fieldId, previewId, prefix = '') => {
      const field = document.getElementById(fieldId);
      const preview = document.getElementById(previewId);
      if (field && preview) {
        // Valor inicial: si está vacío, se mantiene un espacio para conservar el tamaño
        preview.textContent = prefix + (field.value || ' ');
        // Escucha cambios en el campo
        field.addEventListener('input', () => {
          preview.textContent = prefix + field.value;
          preview.classList.add('animate-update');
          setTimeout(() => preview.classList.remove('animate-update'), 300);
          highlightPreview();
        });
      }
    };
  
    // Inicializar y actualizar cada campo con su prefijo
    updatePreview('name', 'previewName');                        
    updatePreview('breed', 'previewBreed', 'Raza: ');
    updatePreview('age', 'previewAge', 'Edad: ');
    updatePreview('weight', 'previewWeight', 'Peso (kg): ');
    updatePreview('disease', 'previewDisease', 'Enfermedad: ');
  
    // Estado: actualización inicial y en cambio
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
  
    // Actualización de la imagen con animación e inicialización
    const photoField = document.getElementById('photo');
    const previewImage = document.getElementById('previewImage');
    if (photoField && previewImage) {
      previewImage.src =
        photoField.value ||
        'https://images.vexels.com/media/users/3/332376/isolated/preview/72feaff55af6d620948f62d03082a018-perro-labrador-amarillo-con-la-lengua-fuera.png';
      photoField.addEventListener('input', () => {
        previewImage.src =
          photoField.value ||
          'https://images.vexels.com/media/users/3/332376/isolated/preview/72feaff55af6d620948f62d03082a018-perro-labrador-amarillo-con-la-lengua-fuera.png';
        previewImage.classList.add('animate-update');
        setTimeout(() => previewImage.classList.remove('animate-update'), 300);
        highlightPreview();
      });
    }
  });
  