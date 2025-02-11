const updateData = async (
  userId: string,
  formData: {
    background?: File | null;
    image?: File | null;
    location: string;
    aboutme: string;
    avalaible: string;
    name: string;
    email: string;
    telegram: string;
    password: string;
  },
  setFormData: React.Dispatch<React.SetStateAction<{
    background: string;
    image: string;
    location: string;
    aboutme: string;
    avalaible: string;
    name: string;
    email: string;
    telegram: string;
    password: string;
  }>>
) => {
  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("telegram", formData.telegram);
    data.append("location", formData.location);
    data.append("aboutme", formData.aboutme);
    data.append("avalaible", formData.avalaible);
    if (formData.password) data.append("password", formData.password);

    // Jika ada file gambar yang dipilih
    if (formData.image) {
      data.append("image", formData.image);
    }
    if (formData.background) {
      data.append("background", formData.background);
    }

    const response = await fetch(`http://localhost:5000/api/users/me/${userId}`, {
      method: 'PUT',
      body: data, // Tidak menggunakan JSON.stringify()
    });

    if (!response.ok) throw new Error('Failed to update user data');

    const result = await response.json();
    setFormData(prev => ({
      ...prev,
      ...result,
      password: '' // Jangan tampilkan password
    }));

    console.log("User updated successfully:", result);
  } catch (err) {
    console.error("Error updating user data:", err);
  }
};

export default updateData;
