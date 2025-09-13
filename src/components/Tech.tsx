'use client';

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { 
  nodejs, css, git, html, javascript, 
  mongodb, reactjs, tailwind, typescript, threejs,
  matterjs, python, django, postgresql, flask, Bitbucket, java, github
} from '../app/imageImport';

const Tech = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    // Get container dimensions
    const containerWidth = boxRef.current.clientWidth;
    const containerHeight = 600;

    // Create an engine
    const engine = Matter.Engine.create({
      gravity: {
        x: 0,
        y: 0.2,
        scale: 0.001,
      },
      // Increase the number of position iterations and velocity iterations
      positionIterations: 50,
      velocityIterations: 50,
    });
    const world = engine.world;

    // Create a renderer
    const render = Matter.Render.create({
      element: boxRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: 'transparent',
      }
    });

    const canvas = boxRef.current.querySelector('canvas');
    if (canvas) {
      canvas.style.borderRadius = '20px';
      canvas.style.border = '0.1px solid gray'; // Change '#ff0000' to your desired color
      canvas.style.boxShadow = '0 0 10px 1px gray';
    }

    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
    
      context.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Shadow color
      context.shadowBlur = 0.05; // Shadow blur
      context.shadowColor = 'white'; // Shadow color
    
      // Draw a shadow for each body
      Matter.Composite.allBodies(engine.world).forEach(body => {
        if (body.circleRadius) {
          context.beginPath();
          context.arc(body.position.x, body.position.y, body.circleRadius * 0.9, 0, 2 * Math.PI);
          context.fill();
        }
      });
    
      context.shadowBlur = 0; // Reset shadow blur
    });
    
    // Create ball bodies with responsive positioning
    const centerX = containerWidth / 2;
    const ballNodejs = Matter.Bodies.circle(centerX + 200, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: nodejs, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballCss = Matter.Bodies.circle(centerX - 200, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: css, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballGit = Matter.Bodies.circle(centerX + 100, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: git, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballHtml = Matter.Bodies.circle(centerX + 300, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: html, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballJavascript = Matter.Bodies.circle(centerX - 400, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: javascript, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballMongodb = Matter.Bodies.circle(centerX - 100, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: mongodb, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballReactjs = Matter.Bodies.circle(centerX, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: reactjs, // Use the imported image
      xScale: 1, // Scale the image in the x-direction (optional)
      yScale: 1  // Scale the image in the y-direction (optional)
    }  } });
    const ballTailwind = Matter.Bodies.circle(centerX - 300, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: tailwind, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballTypescript = Matter.Bodies.circle(centerX + 400, 0, 70, { restitution: 0.3, render: { sprite: {
  texture: typescript, // Use the imported image
      xScale: 0.4, // Scale the image in the x-direction (optional)
      yScale: 0.4  // Scale the image in the y-direction (optional)
    }  } });
    const ballThreejs = Matter.Bodies.circle(centerX + 50, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: threejs, // Use the imported image
      xScale: 0.09, // Scale the image in the x-direction (optional)
      yScale: 0.09  // Scale the image in the y-direction (optional)
    }  } });
    const ballMatterjs = Matter.Bodies.circle(centerX - 50, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: matterjs, // Use the imported image
      xScale: 0.15, // Scale the image in the x-direction (optional)
      yScale: 0.15  // Scale the image in the y-direction (optional)
    }  } });
    const ballPython = Matter.Bodies.circle(centerX + 150, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: python, // Use the imported image
      xScale: 0.3, // Scale the image in the x-direction (optional)
      yScale: 0.3  // Scale the image in the y-direction (optional)
    }  } });
    const ballDjango = Matter.Bodies.circle(centerX - 150, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: django, // Use the imported image
      xScale: 0.08, // Scale the image in the x-direction (optional)
      yScale: 0.08  // Scale the image in the y-direction (optional)
    }  } });
    const ballFlask = Matter.Bodies.circle(centerX + 250, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: flask, // Use the imported image
      xScale: 0.9, // Scale the image in the x-direction (optional)
      yScale: 0.9  // Scale the image in the y-direction (optional)
    }  } });
    const ballBitbucket = Matter.Bodies.circle(centerX - 250, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: Bitbucket, // Use the imported image
      xScale: 0.05, // Scale the image in the x-direction (optional)
      yScale: 0.05  // Scale the image in the y-direction (optional)
    }  } });
    const ballJava = Matter.Bodies.circle(centerX + 350, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: java, // Use the imported image
      xScale: 0.08, // Scale the image in the x-direction (optional)
      yScale: 0.08  // Scale the image in the y-direction (optional)
    }  } });
    const ballPostgresql = Matter.Bodies.circle(centerX - 350, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: postgresql, // Use the imported image
      xScale: 0.7, // Scale the image in the x-direction (optional)
      yScale: 0.7  // Scale the image in the y-direction (optional)
    }  } });
    const ballGithub = Matter.Bodies.circle(centerX + 450, 50, 70, { restitution: 0.3, render: { sprite: {
  texture: github, // Use the imported image
      xScale: 0.2, // Scale the image in the x-direction (optional)
      yScale: 0.2  // Scale the image in the y-direction (optional)
    }  } });
    
    // Create box boundaries with responsive dimensions
    const wallOptions = { isStatic: true, restitution: 0.1 }; // Decrease the restitution
    const wallThickness = 500; // Increase the size
    
    const ground = Matter.Bodies.rectangle(containerWidth / 2, containerHeight + wallThickness / 2, containerWidth + wallThickness * 2, wallThickness, wallOptions);
    const topWall = Matter.Bodies.rectangle(containerWidth / 2, -wallThickness / 2, containerWidth + wallThickness * 2, wallThickness, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-wallThickness / 2, containerHeight / 2, wallThickness, containerHeight + wallThickness, wallOptions);
    const rightWall = Matter.Bodies.rectangle(containerWidth + wallThickness / 2, containerHeight / 2, wallThickness, containerHeight + wallThickness, wallOptions);

    // Add all of the bodies to the world
    Matter.World.add(world, [ballGithub, ballThreejs, ballMatterjs, ballPython, ballDjango, ballFlask, ballBitbucket, ballJava, ballPostgresql, ballNodejs, ballCss, ballGit, ballHtml, ballJavascript, ballMongodb, ballReactjs, ballTailwind, ballTypescript, ground, leftWall, rightWall, topWall]);

    // Set an angular velocity to the balls to make them spin
    // Matter.Body.setAngularVelocity(ballA, 0.1); // Adjust the value as needed

    // Handling mouse interaction
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false
        },
      },
    });

    // Listen for the mousedown event
    Matter.Events.on(mouseConstraint, 'mousedown', (event) => {
      const bodies = Matter.Query.point(Matter.Composite.allBodies(engine.world), mouse.position);
      if (bodies.length > 0) {
        const angle = Math.random() * 2 * Math.PI; // Random direction
        const forceMagnitude = 0.3 * bodies[0].mass; // Adjust as needed
        Matter.Body.applyForce(bodies[0], bodies[0].position, {
          x: forceMagnitude * Math.cos(angle),
          y: forceMagnitude * Math.sin(angle),
        });
      }
    });

    // Listen for the startdrag event
    Matter.Events.on(mouseConstraint, 'startdrag', (event: any) => {
      const body = event.body;
      if (body && body.circleRadius) {
        body.circleRadius *= 1.5; // Increase size by 50%
        body.render.sprite.xScale *= 1.5; // Increase image scale in the x-direction
        body.render.sprite.yScale *= 1.5; // Increase image scale in the y-direction
        Matter.Body.scale(body, 1.5, 1.5); // Apply the scaling
      }
    });

    // Listen for the enddrag event
    Matter.Events.on(mouseConstraint, 'enddrag', (event: any) => {
      const body = event.body;
      if (body && body.circleRadius) {
        body.render.sprite.xScale /= 1.5; // Reset image scale in the x-direction
        body.render.sprite.yScale /= 1.5; // Reset image scale in the y-direction
        body.circleRadius /= 1.5; // Reset size
        Matter.Body.scale(body, 1/1.5, 1/1.5); // Apply the scaling
      }
    });

    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    

    // Run the engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Run the renderer
    Matter.Render.run(render);

    // Cleanup on component unmount
    return () => {
      Matter.Engine.clear(engine);
      Matter.Render.stop(render);
      render.canvas.remove();

    };
  }, []);

  return (
    <section id='tech' className=" relative px-20 py-36">
      <div className='flex justify-between w-full'>
        <span>03/</span>
        <span>TECH STACK</span>
        <div>
        </div>
        <span>/04</span>
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <div ref={boxRef}
          className='relative'
          style={{ 
            width: '100%', 
            maxWidth: '1300px',
            height: '600px',
          }} 
        >
          <div style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            color: 'white',
            zIndex: 9999,
            pointerEvents: 'none',
          }}>
            <p
              style={{ 
                fontSize: '20px', 
                fontWeight: '900', 
                textAlign: 'center',
                lineHeight: '1.1'
              }}
            >
              CLICK OR DRAG BALLS
            </p>
            <p className='mt-4'
              style={{ 
                fontSize: '40px', 
                fontWeight: '300', 
                textAlign: 'center',
                lineHeight: '1.1'
              }}
            >LANGUAGES & TOOLS<br></br> I SPECIALIZE IN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;