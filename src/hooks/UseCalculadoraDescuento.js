import { useState } from "react";
import Swal from "sweetalert2";

const UseCalculadoraDescuento = () => {

    const [firstProduct, setFirstProduct] = useState('');
    const [secondProduct, setSecondProduct] = useState('');
    const [thirdProduct, setThirdProduct] = useState('');
    const [fourthProduct, setFourthProduct] = useState('');
    const [fifthProduct, setFifthProduct] = useState('');
    const [subTotal, setSubTotal] = useState('');
    const [discount, setDiscount] = useState('');
    const [total, setTotal] = useState('');


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
            let firstProductN = Number(firstProduct);
            let secondProductN = Number(secondProduct);
            let thridProductN = Number(thirdProduct);
            let fourthProductN = Number(fourthProduct);
            let fifthProductN = Number(fifthProduct);

            let subTotalS = firstProductN + secondProductN + thridProductN + fourthProductN + fifthProductN;
            setSubTotal(subTotalS.toFixed(2));
            let discountN = 0;


            if (subTotalS > 0 && subTotalS <= 999.99) {
                discountN = 0;

            } else if (subTotalS <= 4999.99) {
                discountN = .10;


            } else if (subTotalS <= 12999.99) {
                discountN = .30;

            } else {
                discountN = .40;

            }

            setDiscount(`${(discountN * 100)}%`);

            let totalS = subTotalS - (subTotalS * discountN);
            setTotal(totalS.toFixed(2));
        }
    }

    const Clean = () => {
        setFirstProduct('');
        setSecondProduct('');
        setThirdProduct('');
        setFourthProduct(''),
            setFifthProduct('');
        setDiscount('');
        setSubTotal('');
        setTotal('');
    }

    const Alerts = (message) => {
        Swal.fire({
            title: message,
            icon: "warning"
        });
    }


    return {
        firstProduct,
        setFirstProduct,
        secondProduct,
        setSecondProduct,
        thirdProduct,
        setThirdProduct,
        fourthProduct,
        setFourthProduct,
        fifthProduct,
        setFifthProduct,
        subTotal,
        discount,
        total,
        Calculate,
        Clean
    }


}

export default UseCalculadoraDescuento;     