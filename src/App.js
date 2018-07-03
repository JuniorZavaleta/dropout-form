import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';


class App extends Component {
    evaluate() {
        try {
            let transfer = (dot_product) => 1.0 / (1.0 + Math.exp(-dot_product));


            let inputs = [
                document.querySelector("[name='housing-type']").value,
                document.querySelector("[name='wall-material']").value,
                document.querySelector("[name='floor-material']").value,
                document.querySelector("[name='roof-material']").value,
                document.querySelector("[name='number-bedroom']").value,
                document.querySelector("[name='water-provider']").value,
                document.querySelector("[name='drainage']").value,
                document.querySelector("[name='electricity']:checked").value,
                document.querySelector("[name='stereo']:checked").value,
                document.querySelector("[name='tv']:checked").value,
                document.querySelector("[name='cable']:checked").value,
                document.querySelector("[name='fridge']:checked").value,
                document.querySelector("[name='computer']:checked").value,
                document.querySelector("[name='laptop']:checked").value,
                document.querySelector("[name='internet']:checked").value,
                document.querySelector("[name='number-family-members']").value,
                document.querySelector("[name='father-study-level']").value,
                document.querySelector("[name='mother-study-level']").value,
                document.querySelector("[name='pre-school']").value,
                document.querySelector("[name='elementary-school']").value,
                document.querySelector("[name='reprobate-before']:checked").value,
                document.querySelector("[name='number-reprobate").value,
                document.querySelector("[name='vocational-orientation']:checked").value,
                document.querySelector("[name='vocational-talk']:checked").value,
                document.querySelector("[name='vocational-fair']:checked").value,
                document.querySelector("[name='admission-exam-simulation']:checked").value,
                document.querySelector("[name='academy-preparation']:checked").value,
                document.querySelector("[name='study-institute']:checked").value
            ];

            let predict = (layers, inputs) => {
                layers.forEach(layer => {
                    let newInputs = [];
                    inputs.push(1); // bias
                    let dot_product = 0.0;
                    layer.forEach(n => {
                        n['weights'].forEach((w, i) => dot_product += w * inputs[i]);
                        newInputs.push(transfer(dot_product));
                    });
                    inputs = newInputs;
                });

                return inputs;
            };

            const layers_n1 = [
                [
                    {'weights': [0.9095327179944206, 2.603569395759558, -3.8326812718565453, 3.4834641238505433, 0.3557411697571624, 1.32520582620338, 2.4522818329294367, 1.2216228572203367, -1.7817410615176905, -3.498846071810625, 0.519329886843314, -0.05764924034882954, 0.8170286833777938, 1.1436233000327611, -1.7283651291775195, 2.9479089697097334, 4.823889550801403, -2.389394400335919, -0.3986237107290703, -1.9562010795960625, -2.1580955184929924, 1.7796694199863274, 3.2871865475793123, -1.7375195132797234, -1.7207597014792766, 1.6563570192059134, 1.531189300947746, 2.1360087465969433, 0.01419523155848857]},
                    {'weights': [0.1065660309868797, -0.3278680460776671, -9.426305680243548, -4.961554447277814, -1.17103335761696, -0.013675498370000377, 0.5509992913581593, 0.5790690804884957, 1.2637486560690816, -2.4604733609881237, 1.6399375040056208, -2.8991385713154276, -4.021378467865648, -3.7475620060601216, 0.8332252130106255, 2.5117524826432067, 2.8706276152727224, 3.8638640275388774, -1.2345929739304586, -1.4757828529019104, -2.208903022971608, 1.7781453885088516, -2.047368932335155, 1.2344845589978772, -1.5565668365124157, 2.4044220637685414, 0.68766051713846, -0.832727334777529, 0.8408484991003552]},
                    {'weights': [-2.1201786964090132, 2.626065259765834, -1.5308506490756375, 6.69015140761049, 3.3429472204885813, -0.7520764678142948, 4.024064243062344, -0.4048628379732353, 0.5303530960227358, 0.3366846521213663, 3.0737975754584355, 1.582173773017817, -1.1805543727855936, 3.601334223944205, 5.536888970087889, 3.623463005274537, -5.29141010819117, -3.3367203834207126, -3.350828835946687, -3.0925936236305867, -0.2892314569046002, 1.2652664650773937, -1.9371217732245443, 1.1073805508471848, 2.5676854121980695, -5.25888508345673, -2.1138878994361416, -3.218397233142156, 1.186110502051073]}
                ],
                [
                    {'weights': [0.9358162440770146, -0.8118543569424657, 1.0266004737141483, -0.9142018801358448]},
                    {'weights': [-0.9358162440770148, 0.8118543569424652, -1.026600473714149, 0.914201880135845]}
                ]
            ];

            const layers_n2 = [
                [
                    {'weights': [-2.4973845059343263, 2.0972606687876145, -0.27327681139826915, 9.109239409179178, -0.6149851150168473, 3.486517160195159, 4.414313437794502, -1.8692045966193371, 0.09235579816816945, 5.047939304930948, -1.973604130897833, 0.3827082259572808, 0.4265827542947065, 0.817450394226428, 3.3977121927137968, 4.121026569159286, -2.2183775050653147, -6.252005664770881, -0.5243934023741268, -1.5754233055216655, 1.7258711824621173, -1.2290376455440541, -0.3542195533798524, -2.572006417805255, 2.5340974610682085, 1.561967006142415, -7.620839918413385, -1.079815392982974, -0.9878354306604791]},
                    {'weights': [1.6658821074114853, 3.935622543338788, 2.6429723119403206, 3.2161483014988943, 1.4964962902406878, 5.129497417531315, -0.2792185438389233, -0.07369931868801155, 1.236813300339612, -1.847152173060586, -1.3066818208384676, 0.4201163550460544, -0.961203098461662, 3.2994556328647486, 3.1293986816549433, 3.248322929432045, -3.966544043987185, -4.484973082871207, -1.149514950152848, 5.1954549631143685, -1.492445803560008, 0.7903216902018516, 1.4751079896039159, 3.9922463122494705, -2.5954051276206758, 1.9764591440682895, 0.8314877844634283, -3.3573774586976066, -1.7005426368000751]},
                    {'weights': [1.5563644126850138, 0.41184718580369867, -0.30731521003920864, 0.7422979751402078, -0.36232197806132094, 1.8765106445540674, 0.5427468829539197, 0.5675734854273141, 2.60607334087392, -4.748476050706297, 0.6194956105733013, 2.5419702276609204, -1.2475188530156311, 0.25277881383758677, -0.46717821155777645, -0.3472412496440927, -3.5710724812671453, -4.769054986074451, -2.502969697218861, -3.3146343117261137, -2.1930638464730636, 2.6126055187216317, 4.484755477024088, -0.6813286776893394, -2.192383903766252, -5.168074029193504, 3.616333968814836, 1.7124352060084878, 1.1569816419285557], 'delta': -0.042513925228213394}
                ],
                [
                    {'weights': [1.0342098766568357, 1.3613822303524301, 0.5560978904875604, -0.77210103016402]},
                    {'weights': [-1.0342098766568362, -1.3613822303524301, -0.5560978904875604, 0.7721010301640201]}
                ]
            ];

            const layers_n3 = [
                [
                    {'weights': [3.1696790427830073, -2.700451846902639, -4.788598448459206, -6.824050569555038, -0.44943278257858205, 1.503700130439127, -1.3849346512194298, 0.5032831011219864, 2.794659340115356, -4.204811956195655, -1.8677111230401338, -2.624266015771769, -3.1355171910519, -1.8483589691772382, -2.803051707327982, -0.338088905918003, 1.6569165871326232, 7.902555972791877, 0.3655176160195276, 1.238341169829931, 0.3861247786039047, 0.6583080989802537, 1.0047209433549704, 1.4788733449801896, -3.9581594459181075, 3.4269018190987626, -0.8932980068213531, 0.853115852558613, 0.0008351876021939205]},
                    {'weights': [1.9972363216271436, 3.669726429426042, 1.8051058234803146, 3.711526613992019, 2.2065804274496865, 3.260364224350081, 1.9031085645994912, -0.09901661206904121, 1.472752989915539, -0.6119457539723223, 0.42482610893875805, -0.9033282003388696, -0.4507425795432081, 4.409495664172112, 1.7440187560430804, 4.893649975860501, 0.23219786008265686, -6.175016373725417, -0.9656790311628808, 1.1400485930343938, -1.9891751486132363, 1.1127152174034778, -3.858569665626426, 7.0804534424024546, -1.6607125420425382, 0.3158256223122205, -0.3956447452805179, -2.2229670790133507, -1.65234943957222]},
                    {'weights': [2.38302301327208, 0.7017090302773393, -1.6888253652280187, 2.762420349905863, 1.3159950669551825, 0.4432451301778693, 1.4511052809324347, 1.5591079323598322, 0.34904577089857003, -0.9459353394107648, 0.9356351460431885, -0.5968438634244051, -0.6297716127649213, -1.4779370376937424, 1.326567666164749, 1.484794325634483, -2.113733126654953, -0.5337735867678932, -2.213809136220787, -2.118161942854033, 0.17779564084421454, 0.845883442875152, 8.321695893641314, -4.873963047787211, -1.8335084413601268, -2.000197748360409, -0.8128900309540877, 0.3012599584536653, -0.8786963220543121]}
                ],
                [
                    {'weights': [-0.8172078941827787, 0.8162307516315044, 0.9199275554958463, -0.4848064208325852]},
                    {'weights': [0.817207894182779, -0.8162307516315042, -0.9199275554958461, 0.4848064208325852]}
                ]
            ];

            console.info(predict(layers_n1, inputs));
            console.info(predict(layers_n2, inputs));
            console.info(predict(layers_n3, inputs));

        } catch (e) {
            alert("Faltan rellenar campos");
        }
    }

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

        const optionsStudyLevel = [
            {"value": 1, "text": "Sin nivel"},
            {"value": 2, "text": "Inicial"},
            {"value": 3, "text": "Primaria"},
            {"value": 4, "text": "Secundaria"},
            {"value": 5, "text": "Superior no universitaria"},
            {"value": 6, "text": "Superior universitaria"},
            {"value": 7, "text": "Post - grado u otro similar"},
            {"value": 8, "text": "No sabe"},
        ];

        const optionsPreSchool = [
            {"value": 1, "text": "Publico"},
            {"value": 2, "text": "Particular"},
            {"value": 3, "text": "Ninguno"},
        ];

        const optionsElementarySchool = [
            {"value": 1, "text": "Publico"},
            {"value": 2, "text": "Particular"},
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form>
                    <div className='row'>
                        {/*Economico*/}
                        <Question key="1" type="select" name="housing-type" question="¿Cual es tu tipo de vivienda?"
                                  options={optionsHousingType}/>
                        <Question key="2" type="select" name="wall-material" question="Material predominante en paredes"
                                  options={optionsWallMaterial}/>
                        <Question key="3" type="select" name="floor-material"
                                  question="Material predominante en el piso" options={optionsFloorMaterial}/>
                        <Question key="4" type="select" name="roof-material"
                                  question="Material predominante en el techo" options={optionsRoofMaterial}/>
                        <Question key="5" type="text" name="number-bedroom" question="Numero de dormitorios"/>
                        <Question key="6" type="select" name="water-provider" question="Abastecimiento de agua"
                                  options={optionsWaterProvider}/>
                        <Question key="7" type="select" name="drainage" question="Desagüe" options={optionsDrainage}/>
                        <Question key="8" type="yes-no" name="electricity" question="Electricidad"/>
                        <Question key="9" type="yes-no" name="stereo" question="Equipo de Sonido"/>
                        <Question key="10" type="yes-no" name="tv" question="TV"/>
                        <Question key="11" type="yes-no" name="cable" question="Cable"/>
                        <Question key="12" type="yes-no" name="fridge" question="Refrigeradora"/>
                        <Question key="13" type="yes-no" name="computer" question="Computadora"/>
                        <Question key="14" type="yes-no" name="laptop" question="Laptop"/>
                        <Question key="15" type="yes-no" name="internet" question="Servicio de Internet"/>
                        <Question key="16" type="text" name="number-family-members" question="Miembros de la familia"/>
                        {/*Social*/}
                        <Question key="17" type="select" name="father-study-level" question="Nivel educativo del padre"
                                  options={optionsStudyLevel}/>
                        <Question key="18" type="select" name="mother-study-level"
                                  question="Nivel educativo de la madre" options={optionsStudyLevel}/>
                        {/*Academico*/}
                        <Question key="19" type="select" name="pre-school" question="Educacion inicial"
                                  options={optionsPreSchool}/>
                        <Question key="20" type="select" name="elementary-school" question="Educacion primaria"
                                  options={optionsElementarySchool}/>
                        <Question key="21" type="yes-no" name="reprobate-before" question="Repitio algun grado?"/>
                        <Question key="22" type="text" name="number-reprobate" question="Numero de veces repetidas"/>
                        <Question key="23" type="yes-no" name="vocational-orientation"
                                  question="Prueba de orientacion vocacional?"/>
                        <Question key="24" type="yes-no" name="vocational-talk" question="Charla vocacional?"/>
                        <Question key="25" type="yes-no" name="vocational-fair"
                                  question="Feria acerca de carreras ofrecidas?"/>
                        <Question key="26" type="yes-no" name="admission-exam-simulation"
                                  question="Simulacro examen de admision?"/>
                        <Question key="27" type="yes-no" name="academy-preparation" question="Se preparo en Academia?"/>
                        <Question key="28" type="yes-no" name="study-institute" question="Estudio en Instituto?"/>

                        <button type='button' className="aves-effect waves-light btn" onClick={this.evaluate}>Evaluar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
