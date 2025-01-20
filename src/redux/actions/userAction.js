export const fetchUserProfile = async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Une erreur est survenue.");
    }

    const data = await response.json();
    return data;
};

export const updateUserProfile = async (token, updatedData) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Une erreur est survenue lors de la mise à jour.");
    }

    const data = await response.json();
    return data;
};