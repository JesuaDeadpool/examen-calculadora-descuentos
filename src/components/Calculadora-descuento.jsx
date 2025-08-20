
const CalculadoraDescuento = () => {
    return (
        <div className="container wh-100">
            <div className="row mt-5 ">
                <div className="col-12 col-md-6 border-end border-grey">
                    <div className="row px-4">
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del primer producto</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del segundo producto</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del tercer producto</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del cuarto producto</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="" className="mb-3 ">Ingrese el valor del quinto producto</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-12">
                            <button className="btn btn-success">Calcular</button>
                            <button className="btn btn-danger">Limpiar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="row px-4">
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="">Subtotal:</label>
                            <input type="text" className="form-control" readOnly />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor="">Descuento:</label>
                            <input type="text" className="form-control" readOnly />
                        </div>
                        <div className="col-12 px-3 py-3">
                            <label htmlFor=""> Total a Pagar: </label>
                            <input type="text" className="form-control" readOnly />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default CalculadoraDescuento; 