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

