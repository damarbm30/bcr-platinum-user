import Swal from 'sweetalert2';

export const FormLogin = (data) => async (dispatch) => {
    try {
        const response = await fetch("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        const userInfo = await fetch("https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${result.token}`,
            },
        });
        const user = JSON.parse(JSON.stringify(await userInfo.json()));

        if (result.token) {
            dispatch({
                type: LOGIN,
                payload: result.token,
                user: user,
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Berhasil',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            authError(result.error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Login Gagal",
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (error) {
        authError(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Email atau Password Salah',
            showConfirmButton: false,
            timer: 1500
        });
    }
};