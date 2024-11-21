export const loginUser = async (data) => {
    try {
        const res = await fetch(`http://localhost:9000/api/auth/user/login-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to login');
        }

        const userInfo = await res.json();
        return userInfo;
    } catch (error) {
        // Logging error for debugging purposes
        console.error('Login error:', error);
        throw new Error(error.message || 'Something went wrong during login');
    }
};
