import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';

class App extends Component {
    render() {
        const optionsHousingType = [
            {"value": 1, "text": "Casa independiente"},
            {"value": 2, "text": "Departamento en edificio"},
            {"value": 3, "text": "Vivienda en quinta"},
            {"value": 4, "text": "Vivienda en casa de vecinda(callejón, solar o corralón)"},
            {"value": 5, "text": "Choza o cabaña"},
            {"value": 6, "text": "Vivienda improvisada"},
            {"value": 7, "text": "Local no destinado para habitación humana"},
            {"value": 8, "text": "Otro"},
        ];

        const optionsWallMaterial = [
            {"value": 1, "text": "Ladrillo o bloque de cemento"},
            {"value": 2, "text": "Piedra o sillar con bloque de cemento"},
            {"value": 3, "text": "Adobe o tapia"},
            {"value": 4, "text": "Quincha (caña con barro)"},
            {"value": 5, "text": "Piedra con barro"},
            {"value": 6, "text": "Madera"},
            {"value": 7, "text": "Estera"},
            {"value": 8, "text": "Otro"},
        ];

        const optionsFloorMaterial = [
            {"value": 1, "text": "Parquet o madera pulida"},
            {"value": 2, "text": "Láminas asfálticas, vinílicos o similares"},
            {"value": 3, "text": "Losetas,terrazos o similares"},
            {"value": 4, "text": "Madera (entablados)"},
            {"value": 5, "text": "Cemento"},
            {"value": 6, "text": "Tierra"},
            {"value": 7, "text": "Otro"},
        ];

        const optionsRoofMaterial = [
            {"value": 1, "text": "concreto armado"},
            {"value": 2, "text": "madera"},
            {"value": 3, "text": "tejas"},
            {"value": 4, "text": "planchas de calamina, fibra de cemento o similares"},
            {"value": 5, "text": "caña o estera con torta de barro"},
            {"value": 6, "text": "estera"},
            {"value": 7, "text": "paja, hojas de palmeras, etc"},
            {"value": 8, "text": "otro"},
        ];

        const optionsWaterProvider = [
            {"value": 1, "text": "Red publica dentro de la vivienda"},
            {"value": 2, "text": "Red publica fuera de la vivienda, pero dentro del edificio"},
            {"value": 3, "text": "Pilón de uso publico"},
            {"value": 4, "text": "Camión, cisterna u otro similar"},
            {"value": 5, "text": "Pozo"},
            {"value": 6, "text": "Río, acequia, manantial o similar"},
            {"value": 7, "text": "Otro"},
        ];

        const optionsDrainage = [
            {"value": 1, "text": "Red pública de desagüe dentro de la vivienda"},
            {"value": 2, "text": "Red pública de desagüe fuera de la vivienda pero dentro del edificio"},
            {"value": 3, "text": "Letrina"},
            {"value": 4, "text": "Pozo séptico"},
            {"value": 5, "text": "Pozo ciego o negro"},
            {"value": 6, "text": "Río, acequia o canal"},
            {"value": 7, "text": "Otro"},
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form>
                    <Question type="select" name="housing-type" question="¿Cual es tu tipo de vivienda?" options={optionsHousingType}/>
                    <Question type="select" name="wall-material" question="Material predominante en paredes" options={optionsWallMaterial}/>
                    <Question type="select" name="floor-material" question="Material predominante en el piso" options={optionsFloorMaterial}/>
                    <Question type="select" name="floor-material" question="Material predominante en el techo" options={optionsRoofMaterial}/>
                    <Question type="text" name="number-bedroom" question="Numero de dormitorios"/>
                    <Question type="select" name="water-provider" question="Abastecimiento de agua" options={optionsWaterProvider}/>
                    <Question type="select" name="drainage" question="Desagüe" options={optionsDrainage}/>
                    <Question type="yes-no" name="electricity" question="Electricidad"/>
                    <Question type="yes-no" name="stereo" question="Equipo de Sonido"/>
                    <Question type="yes-no" name="tv" question="TV"/>
                    <Question type="yes-no" name="cable" question="Cable"/>
                    <Question type="yes-no" name="fridge" question="Refrigeradora"/>
                    <Question type="yes-no" name="computer" question="Computadora"/>
                    <Question type="yes-no" name="laptop" question="Laptop"/>
                    <Question type="yes-no" name="internet" question="Servicio de Internet"/>
                    <Question type="text" name="number-family-members" question="Miembros de la familia"/>
                </form>
            </div>
        );
    }
}

export default App;
