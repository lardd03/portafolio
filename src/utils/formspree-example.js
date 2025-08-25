// Ejemplo de implementación con Formspree
// Solo necesitas cambiar la action del formulario

const submitFormWithFormspree = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    })

    if (response.ok) {
      return { success: true }
    } else {
      throw new Error('Error al enviar el formulario')
    }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Para usar Formspree:
// 1. Regístrate en https://formspree.io/
// 2. Crea un nuevo formulario
// 3. Obtén tu Form ID
// 4. Reemplaza TU_FORM_ID con tu ID real
// 5. Usa esta función en lugar de EmailJS
