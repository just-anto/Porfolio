import { useCallback, useMemo} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

  const ParticlesComponent = () => {
     const options = useMemo(() => {
      
      return{ 
      background:{
        color: "#fff" //color de las particulas
      },
      fullscreen: {
        enable: true, //habilitar esto hace las particles esten en toda la pantalla
        zIndex: 0, //el zIndex, valur usadon en pantalla grande, valor en 0 es por defecto
      },
      interactivity: {
          events: {
            onClick: {
              enable: true, //habilita el evento click
              mode: "push", //agrega particles con cada click
            },
            onHover: {
              enable: true, //habilita el evento onHover
              move: "repulse", //las particulas se alejan del cursor
            },
          },
            modes:{
              push: {
                quantity: 10, //numero de particulas que se agregan por click
              },
              repulse: {
                distance: 100, //distancia de las particles al cursor
                radius: 300, // la distancia de las particles al cursor
              },
            },
          },
        particles: {
          links: {
            enable: true, //habilitar esto hace que se unan lis links
          },
          move: {
            enable: true, //habilitar esto hace que se muevan en la pantalla
            speed: {min: 1, max: 3}, //usa el rango de speed min y max hace que se muevan en distintas velocidades
          },
          opacity: {
            value: {min: 0.3, max: 0.7}, //usa el rango de opacity pasra tener una semitransparencia
          },
          size: {
            value: {min: 1, max: 3}, //distintos tamaños de particles
          },
        },
      };
    }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options}/>;
};

export default ParticlesComponent;
