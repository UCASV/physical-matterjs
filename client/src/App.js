import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";
import Draggable from "react-draggable";
import styled from "styled-components";
import "./styles.css";
import Countdown from "./countdown";
import TutorImg from "./images/user.png";
import Avatar1 from "./images/ImagenesWeb/Avatar_boy_man.png";
import Avatar2 from "./images/ImagenesWeb/female-avatar-12-774634.webp";
import Avatar3 from "./images/ImagenesWeb/female-student-2-774611.png";
import Avatar4 from "./images/ImagenesWeb/user_account_profile_avatar_person_student_male-512.webp";
import TriangleG from "./images/ImagenesWeb/metal-tr.png";
import Triangle from "./images/ImagenesWeb/tr1.png";
import BoxG from "./images/ImagenesWeb/metal-box.jpg";
import Box from "./images/ImagenesWeb/box.png";
import StickG from "./images/ImagenesWeb/metal-st.jpg";
import Stick from "./images/ImagenesWeb/11wood-png.png";
import Shield from "./images/ImagenesWeb/shield.png";
import Person from "./images/ImagenesWeb/person.png";
import Flag from "./images/ImagenesWeb/blackFlag.png";

// barra superior
const Bar = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items:center;
  background-color: #5b35ad;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.3);
`;

const Time = styled.div`
  font-family: "Krona One", sans-serif;
  display:flex;
  align-items:center;
`;

const Gravity = styled.div`
  font-family: "Krona One", sans-serif;
  display:flex;
  align-items:center;
`;

const Tutor = styled.p`
  font-family: "Krona One", sans-serif;
  display:flex;
  align-items:center;
  flex-wrap: wrap;
  margin-left:10px;
`;

const Vote = styled.input`
  height:40px;
  border-style:none;
  background-color: #7e9999;
  border-radius: 50px;
  font-family: "Krona One", sans-serif;
`;

const SectionLeft = styled.div`
  width:375px;
  height:550px;
`;

const SectionRight = styled.div`
  width:375px;
  height:550px;
`;

const MundoWrapper = styled.div`
  margin-top:10px;
`;

const Mundo = styled.div`
  width:100%;
`;

const Meta = styled.div`
  position:absolute;
  width:500px;
  height:1px;
  background-color:gray;
  margin-left:430px;
  margin-top:30px;
`;

const Piezas = styled.div`
position: relative;
width: 50%;
`;

const Profile1 = styled.div`
  margin-top:10px;
  position:absolute;
  margin-left:20px;
  display:flex;
  align-items:center;
  border: 1px solid #097707;
  border-radius: 30px;
`;

const Profile2 = styled.div`
  margin-top:300px;
  position:absolute;
  margin-left:20px;
  display:flex;
  align-items:center;
  border: 1px solid #097707;
  border-radius: 30px;
`;

const Profile3 = styled.div`
  margin-top:10px;
  position:absolute;
  margin-left:1160px;
  display:flex;
  align-items:center;
  border: 1px solid #097707;
  border-radius: 30px;
`;

const Profile4 = styled.div`
  margin-top:300px;
  position:absolute;
  margin-left:1160px;
  display:flex;
  align-items:center;
  border: 1px solid #097707;
  border-radius: 30px;
`;

const Avatar = styled.img`
  width:80px;
  height:85px;
`;

const Name = styled.p`
  font-family: var(--ruda-font);
  font-size: 20px;
  margin-right:10px;
`;


const ImgWrapper = styled.img`
  padding:10px;
  position: absolute;
  transform: rotate(1800deg);
`;

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      //positionIterations: 20
    });

    //crea y renderiza la vista
    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 1365,
        height: 560,
        wireframes: false,
        background : '#F7E9E9',
      }
    });
    
    /*
    var ball = Bodies.circle(90, 280, 50, {
      render: {
        sprite: {
          texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
          xScale: 1,
          yScale: 1
        }
      }
    }); */

    var optionsBodies = {
      restitution: 0.5,
      angle: 0,
      torque: 0,
      isStatic: false,
      friction: 3,
      ignoreGravity: true,
      render: {
          fillStyle: '#CC4747'
      }
  };
    
    var triangle1 = Bodies.polygon(1300, 200, 3, 40, optionsBodies);
    var triangle2 = Bodies.polygon(1250, 200, 3, 40, optionsBodies);
    var triangle3 = Bodies.polygon(1200, 200, 3, 40, optionsBodies);

    var square1 = Bodies.polygon(1300, 480, 4, 40, optionsBodies);
    var square2 = Bodies.polygon(1250, 480, 4, 40, optionsBodies);
    var square3 = Bodies.polygon(1200, 480, 4, 40, optionsBodies);

    var bar1 = Bodies.rectangle(210, 240, 240, 15, optionsBodies);
    var bar2 = Bodies.rectangle(210, 220, 240, 15, optionsBodies);
    var bar3 = Bodies.rectangle(210, 200, 240, 15, optionsBodies);
    var bar4 = Bodies.rectangle(210, 180, 240, 15, optionsBodies);

    var strongBar1 = Bodies.rectangle(240, 450, 40, 120, optionsBodies);
    var strongBar2 = Bodies.rectangle(260, 450, 40, 120, optionsBodies);
    var strongBar3 = Bodies.rectangle(290, 450, 40, 120, optionsBodies);

    World.add(engine.world, [

      // walls
      //horizontales
      Bodies.rectangle(200, 550, 2500, 50, { isStatic: true }),

      //verticales
      Bodies.rectangle(1365, 300, 20, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 20, 600, { isStatic: true }),

      //containers
      //verticales
      Bodies.rectangle(350, 300, 10, 600, { isStatic: true }),
      Bodies.rectangle(1015, 300, 10, 600, { isStatic: true }),

      // horizontales
      Bodies.rectangle(0, 280, 700, 10, { isStatic: true }),
      Bodies.rectangle(1200, 280, 350, 10, { isStatic: true })
    ]);

    World.add(engine.world, [bar1, bar2, bar3, bar4, square1, square2, square3, triangle1, triangle2, triangle3, strongBar1, strongBar2, strongBar3]);
    engine.world.gravity.y = 0;
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: true
          }
        }
      });

      
    World.add(engine.world, mouseConstraint);


    Engine.run(engine);

    Render.run(render);

  const checkbox = document.querySelector('#checkbox')
  checkbox.addEventListener('change', function (event) {
   if (this.checked) {
    engine.world.gravity.y = 0.5;
    }else{
      engine.world.gravity.y = 0;
    }
})
  }
  

  render() {
    return (
      <>
      <Bar>
          <Tutor>
          <img src={TutorImg}  width={50} height={50} />
            <h3>Tutor - Nombre del tutor</h3>
          </Tutor>
          <Gravity>
             <h3> Gravedad</h3>
             <input type="checkbox" className="checkbox" id="checkbox" />
             <label className="switch" htmlFor="checkbox"/>
          </Gravity>
          <Time>
            <h3>Tiempo Restante:  </h3>
            <Countdown/>
          </Time>
        </Bar>
      <MundoWrapper>
        
        <Mundo ref="scene">
        <Meta/>  
        <Profile1>
            <Avatar src={Avatar1} alt="Avatar1"/>
            <Name>Jugador 1</Name>
          </Profile1>
          <Profile2>
            <Avatar src={Avatar2} alt="Avatar2"/>
            <Name>Jugador 2</Name>
          </Profile2>
          <Profile3>
            <Name>Jugador 3</Name>
            <Avatar src={Avatar3} alt="Avatar3"/>
          </Profile3>
          <Profile4>
            <Name>Jugador 4</Name>
            <Avatar src={Avatar4} alt="Avatar4"/>
          </Profile4>
        </Mundo>
      </MundoWrapper>
      </>
    );
  }
}
export default Scene;