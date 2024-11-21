
export const registerUser = async (data) => {
    try {
        const res = await fetch(`http://localhost:9000/api/auth/user/create-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'no-store',
        });

        if (!res.ok) {
            // If the response is not ok, throw an error
            throw new Error(`Registration failed: ${res.statusText}`);
        }

        const userInfo = await res.json();
        return userInfo;
    } catch (error) {
        console.error('Registration error:', error);
        throw new Error(error.message || 'Something went wrong during registration');
    }
};
