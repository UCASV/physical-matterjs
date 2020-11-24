import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";
import Draggable from "react-draggable";
import styled from "styled-components";
import "./styles.css";
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
  flex-wrap: wrap;
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
`;

const EndUp = styled.div`
  font-family: "Krona One", sans-serif;
  flex-wrap: wrap;
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
  margin-top:20px;
  display:flex;
  justify-content:center;
`;

const Mundo = styled.div`
  
`;

const Piezas = styled.div`
position: relative;
width: 50%;
`;

const Section1 = styled.section`
  margin-left:20px;
  flex-wrap: wrap;
  position: absolute;
  top: 70px;
`;

const Profile = styled.div`
  display:flex;
  align-items:center;
`;

const Avatar = styled.img`
  width:80px;
  height:85px;
`;

const Name = styled.p`
  font-family: var(--ruda-font);
  font-size: 20px;
`;

const Player1 = styled.div`
  display:flex;
  flex-direction:row;
  width: 200px;
  height: 140px;
  border: 3px solid #097707;
  border-radius: 30px;
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
        width: 600,
        height: 550,
        wireframes: false
      }
    });
    var ball = Bodies.circle(90, 280, 50, {
      render: {
        sprite: {
          texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
          xScale: 1,
          yScale: 1
        }
      }
    });
    var bod = Bodies.Box;
    var triangle = Bodies.polygon(50, 50, 3, 50);
    var rectangleA = Bodies.rectangle(300, 20, 50, 50, { restitution: 0.5 });
    var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
    World.add(engine.world, [

      // walls
      //horizontales
      Bodies.rectangle(200, 550, 1000, 50, { isStatic: true }),

      //verticales
      Bodies.rectangle(600, 300, 20, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 20, 600, { isStatic: true })
    ]);

    World.add(engine.world, [ballA, ballB, rectangleA, triangle, ball]);
    engine.world.gravity.y = 0;
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 1,
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
          <Time>
            <h3>Tiempo Restante:  </h3>
            <div id="start-timer"></div>
            <div id="stop-timer"></div>
          </Time>
          <Gravity>
             <h3> Gravedad</h3>
             <input type="checkbox" className="checkbox" id="checkbox" />
             <label className="switch" htmlFor="checkbox"/>
          </Gravity>
          <Tutor>
          <img src="./logo192.png"  width={50} height={50} />
            <h3>Tutor - Nombre del tutor</h3>
          </Tutor>
          <EndUp>
            <Vote type="button" defaultValue="Terminar" />
          </EndUp>
        </Bar>
      <MundoWrapper>
        <SectionLeft>
        <Section1>
          <Profile>
            <Avatar src={Avatar1} alt="Avatar1"/>
            <Name>Jugador 1</Name>
          </Profile>
            <Player1 id="container1">
              <Piezas className="PiezaM">
              <Draggable>
                <ImgWrapper className="1" src={TriangleG} alt="trG" width={80} height={85} />
              </Draggable>
              <Draggable>
                <ImgWrapper className="1" src={TriangleG} alt="trG" width={80} height={85} />
              </Draggable>
              <Draggable>
                <ImgWrapper className="1" src={TriangleG} alt="trG" width={80} height={85} />
              </Draggable>
              </Piezas>
              <Piezas className="PiezaMa">
              <Draggable>
                <ImgWrapper className="2" src={Triangle} alt="tr" width={80} height={85} onClick = "LoadPiecesTr()"/>
              </Draggable>
              <Draggable>
                <ImgWrapper className="2" src={Triangle} alt="tr" width={80} height={85} onClick = "LoadPiecesTr()"/>
              </Draggable>
              <Draggable>
                <ImgWrapper className="2" src={Triangle} alt="tr" width={80} height={85} onClick = "LoadPiecesTr()"/>
              </Draggable>
              </Piezas>
            </Player1>
          </Section1>
        </SectionLeft>
        <Mundo ref="scene">
        <ImgWrapper className="2" src={Triangle} alt="tr" width={80} height={85} onClick = "LoadPiecesTr()"/>
        </Mundo>
        <SectionRight/>
      </MundoWrapper>
      </>
    );
  }
}
export default Scene;