import React from 'react';
import s from './ApplicantDetails.module.css';

function ApplicantDetails() {
  return (
    <>
        <table class="default">
            <tr>
                <th colspan="4">DATOS DEL SOLICITANTE</th>
            </tr>
        <tr>
            <th>Vencimiento</th>
            <td><input type="date" 
                value="2022-03-07"
                min="2018-01-01" max="2030-12-31"/></td>
            <th>Cliente</th>
            <td><input type="text" 
                placeholder='Nombre'/></td>
        </tr>
        <tr>
            <th>Áreas</th>
            <td><input type="text" 
                placeholder='Marketing y Diseño Digital'/>
            </td>
            <th>Contacto</th>
            <td><input type="text" 
                placeholder='Nahuel Martinez'/></td>
        </tr>
        <tr>
            <th>Moneda</th>
            <td>
            <select id="" name="">
                    <option value="Peso Argenino">Peso Argenino</option>
                    <option value="Peso Colombianos">Peso Colombianos</option>
                    <option value="Peso Chilenos">Peso Chilenos</option>
                    <option value="Dólar">Dólar</option>
                </select>
            </td>
            <th>Mail</th>
            <td><input type="email" 
                placeholder='nahuel.martinez@hotmail.com'/></td>
        </tr>
        <tr>
            <th>Nota</th>
            <td><input type="text" 
                placeholder=''/>
            </td>
            <th>Teléfono</th>
            <td><input type="text" 
                placeholder=''/></td>
        </tr>
        </table>
    </>
  )
}

export default ApplicantDetails