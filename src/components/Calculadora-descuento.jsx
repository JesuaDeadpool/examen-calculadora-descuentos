import UseCalculadoraDescuento from "../hooks/UseCalculadoraDescuento";

const CalculadoraDescuento = () => {

    const {
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
    } = UseCalculadoraDescuento();


    return (
        <div className="container wh-100">
            <div className="row mt-5 ">
                <div className="col-12 col-md-6 border-end border-grey">
                    <div className="row px-4">
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3">Ingrese el valor del primer producto</label>
                            <input type="text" className="form-control" value={firstProduct} onChange={(e) => setFirstProduct(e.target.value)} />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del segundo producto</label>
                            <input type="text" className="form-control" value={secondProduct} onChange={(e) => setSecondProduct(e.target.value)} />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del tercer producto</label>
                            <input type="text" className="form-control" value={thirdProduct} onChange={(e) => setThirdProduct(e.target.value)} />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del cuarto producto</label>
                            <input type="text" className="form-control" value={fourthProduct} onChange={(e) => setFourthProduct(e.target.value)} />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del quinto producto</label>
                            <input type="text" className="form-control" value={fifthProduct} onChange={(e) => setFifthProduct(e.target.value)} />
                        </div>

                        <div className="col-12">
                            <button className="btn btn-success me-3" onClick={Calculate}>Calcular</button>
                            <button className="btn btn-danger" onClick={Clean}>Limpiar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="row px-4">
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3">Subtotal:</label>
                            <input type="text" className="form-control" readOnly value={subTotal} />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <h2 className="discount text-success">Descuento: {discount}</h2>
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3"> Total a Pagar: </label>
                            <input type="text" className="form-control" readOnly value={total} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default CalculadoraDescuento; 