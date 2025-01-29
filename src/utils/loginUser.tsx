export const loginUser = async (formData: FormData) => {
    const API_URL = 'http://localhost:5000/api/auth/login';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: "include", // Ini penting agar cookies dikirim dan diterima
        });

        if (!response.ok) {
            throw new Error(`Failed to login: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
