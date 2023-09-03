import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import style from './Particle.module.css'

const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div className={style.tsparticlesBg}>
            <Particles id="tsparticles"
                       init={particlesInit}
                       loaded={particlesLoaded}
                       options={{
                           style: {
                               height: '100vh',
                               width: '100vw',
                               resize: 'true',
                           },

                           fullScreen: {
                               enable: false,
                               zIndex: 0,
                           },
                           background: {
                               color: {
                                   value: "#17181B",
                               },
                           },
                           fpsLimit: 120,
                           // interactivity: {
                           //     events: {
                           //         onClick: {
                           //             enable: true,
                           //             mode: "push",
                           //         },
                           //         onHover: {
                           //             enable: true,
                           //             mode: "repulse",
                           //         },
                           //         resize: false,
                           //     },
                           //     modes: {
                           //         push: {
                           //             quantity: 4,
                           //         },
                           //         repulse: {
                           //             distance: 200,
                           //             duration: 0.4,
                           //         },
                           //     },
                           // },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.5,
                                   width: 1,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outModes: {
                                       default: "bounce",
                                   },
                                   random: false,
                                   speed: 0.5,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 800,
                                   },
                                   value: 80,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                               },
                               size: {
                                   value: {min: 1, max: 5},
                               },

                           },
                           detectRetina: true,
                       }}
            />
        </div>

    );
};

export default Particle;