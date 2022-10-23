import particles from 'react-tsparticles'
import {loadFull} from "tsparticles";
import {useCallback, useMemo} from "react";

const particlesComponent = (proms) => {
    const options = useMemo (() => {
        //usando una opcion vacia de objeto va a cargar la opcion predeterminada, estaticas, blancas y sin fondo
        return {
            background: {
                color:"" //esto para el color del background
            },
            fullScreen: {
                enable: true, //habilita que se llene toda la pagina
                zIndex: 0, //el zIndex es un valorusado cuando esta pantalla completa, 0 es por defecto
            },
            interactivity:{
                events: {
                    onClick: {
                        enable: true, //habilita el evento click
                        mode: "push", //agraga particles en click
                    },
                overhover: {
                    enable: true, //habilita el evento distanciar
                    mode: "repulsar"//las particulas se alejan del cursor
                },
            },
                modes: {
                    push: {
                        quantity: 6, //numero de particulas que se agregan por click
                    },
                    repulse: {
                        distance: 100, //distancia entre las particulas y el cursor
                    },
                },
            },
            particles:{
                links: {
                    enabled: true, //hablilitando esto van a aparecer las conexiones entre las particulas
                    distance: 100, //maxima distancia para la union de particulas
                },
                move:{
                    enable: true, //habilitando esto las particulas se mueven
                    speed: {min: 1, max: 3}, //velocidad con la que se mueven las particulas entre min y max
                },
                opacity: {
                    value: {min: 0.3, max: 0.7} //una opacidad diferente, para tener un efecto semitranparente
                },
                size:{
                    value: {min: 1, max: 3}, //modificando el tamaño d las particulas 
                },
            }
        };
    }, []);

    const particlesInit = useCallback ((engine) =>{
        loadFull(engine);
    }, []);

    //setting el id es mas practico para identificar la particula correcta
    return <particles id={props.id} init={particlesInit} options={options} />;
};

export default particlesComponent;