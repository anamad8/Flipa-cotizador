import React from 'react';
import s from './Servies.module.css';

function Servies() {
  return (
    <>
        <div className={s.servicios}>
            <h2>Servicios</h2>
        </div>
        <div className={s.tabla2}>
            <div className={s.area}>
                <select id="" name="">
                    <option value="Marketing">Marketing</option>
                    <option value="Diseño">Diseño</option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Desarrollo">Desarrollo</option>
                </select>
            </div>
            <div className={s.servicio}>
                <p>Servicio</p>
            </div>
            <div className={s.detalle}>
                <p>Detalle</p>
            </div>
            <div className={s.objetivo}>
                <p>Objetivo</p>
            </div>
            <div className={s.formato}>
                <p>Formato</p>
            </div>
            <div className={s.revisiones}>
                <p>Revisiones</p>
            </div>
            <div className={s.plazo}>
                <p>Plazo</p>
            </div>
            <div className={s.monto}>
                <p>Monto</p>
            </div>
        </div>

    </>
  )
}

export default Servies