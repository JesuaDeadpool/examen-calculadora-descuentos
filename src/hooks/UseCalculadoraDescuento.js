import { useState } from "react";
import Swal from "sweetalert2";

const UseCalculadoraDescuento = () => {

    const [firstProduct, getFirstProduct] = useState('');
    const [secondProduct, getSecondProduct] = useState('');
    const [thirdProduct, getThirdProduct] = useState('');
    const [fourthProduct, getFourthProduct] = useState('');
    const [fifthProduct, getFifthProduct] = useState('');
    const [subTotal, getSubTotal] = useState('');
    const [discount, getDiscount] = useState('');
    const [total, getTotal] = useState('');


    const Calculate = () => {
        if (firstProduct === "") {
            Alerts("Debe ingresar el valor del primer producto");
        } else if (secondProduct === "") {
            Alerts("Debe ingresar el valor del segundo producto");
        } else if (thirdProduct === "") {
            Alerts("Debe ingresar el valor del tercer producto");
        } else if (fourthProduct === "") {
            Alerts("Debe ingresar el valor del cuarto producto");
        } else if (fifthProduct === "") {
            Alerts("Debe ingresar el valor del quinto producto");
        } else {

        }
    }

    const Clean = () => {

    }

    const Alerts = (message) => {
        Swal.fire({
            title: message,
            icon: "warning"
        });
    }


    return {

    }


}

export default UseCalculadoraDescuento; 