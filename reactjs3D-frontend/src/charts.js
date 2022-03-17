import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Text } from "@react-three/drei";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  RadialBar,
  RadialBarChart,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";

function Charts() {
  const navigate = useNavigate();
  // * fixed data in the next update with useContext will obtain the DB data
  const obj = [
    {
      name: "Earth",
      rSpeed: 1674,
      oSpeed: 30,
      radius: 6371,
      color: "black",
      age: 4.503,
      moons: [
        {
          name: "Selene",
          rSpeed: 3683,
          oSpeed: 1.022,
          radius: 1737.4,
          distanceFromPlanet: 384400,
        },
      ],
    },
    {
      name: "Jupiter",
      rSpeed: 45061.6,
      oSpeed: 13.06,
      radius: 69911,
      color: "white",
      age: 4.603,
      moons: [
        {
          name: "Callisto",
          rSpeed: 8784000,
          oSpeed: 8.204,
          radius: 2410.3,
          distanceFromPlanet: 1883000,
        },
        {
          name: "Io",
          rSpeed: 271,
          oSpeed: 17.3,
          radius: 1821.6,
          distanceFromPlanet: 421600,
        },
        {
          name: "Europa",
          rSpeed: 7290000,
          oSpeed: 13.743,
          radius: 1560.8,
          distanceFromPlanet: 670900,
        },
        {
          name: "Ganymede",
          rSpeed: 9867600,
          oSpeed: 10.88,
          radius: 2634.1,
          distanceFromPlanet: 1070000,
        },
      ],
    },
    {
      name: "Mars",
      rSpeed: 868.22,
      oSpeed: 26.5,
      radius: 3389.5,
      color: "red",
      age: 4.603,
      moons: [
        {
          name: "Phobos",
          rSpeed: 11,
          oSpeed: 2.138,
          radius: 11.267,
          distanceFromPlanet: 9234,
        },
        {
          name: "Deimos",
          rSpeed: 1.36,
          oSpeed: 1.36,
          radius: 6.2,
          distanceFromPlanet: 23458,
        },
      ],
    },
    {
      name: "Neptune",
      rSpeed: 9.65,
      oSpeed: 5.43,
      radius: 24622,
      color: "blue",
      age: 4.503,
      moons: [
        {
          name: "Triton",
          rSpeed: 9650,
          oSpeed: 4.39,
          radius: 1353.4,
          distanceFromPlanet: 354800,
        },
      ],
    },
    {
      name: "Saturn",
      rSpeed: 35500,
      oSpeed: 9.68,
      radius: 58232,
      color: "orange",
      age: 4.503,
      moons: [
        {
          name: "Enceladus",
          rSpeed: 12.64,
          oSpeed: 12.64,
          radius: 252.1,
          distanceFromPlanet: 1221830,
        },
        {
          name: "Titan",
          rSpeed: 5.57,
          oSpeed: 5.57,
          radius: 2574.7,
          distanceFromPlanet: 1000000.2,
        },
      ],
    },
    {
      name: "Uranus",
      rSpeed: 9320,
      oSpeed: 6.83,
      radius: 25362,
      color: "lightgreen",
      age: 4.503,
      moons: [
        {
          name: "Titania",
          rSpeed: 4.67,
          oSpeed: 4.67,
          radius: 788.4,
          distanceFromPlanet: 410938,
        },
        {
          name: "Umbriel",
          rSpeed: 4.67,
          oSpeed: 4.67,
          radius: 584.7,
          distanceFromPlanet: 240638,
        },
      ],
    },
    {
      name: "Mercury",
      rSpeed: 10.83,
      oSpeed: 47.87,
      radius: 2439.7,
      color: "grey",
      age: 4.503,
      moons: [],
    },
    {
      name: "Sun",
      rSpeed: 7.189,
      oSpeed: 200,
      radius: 695340,
      color: "brown",
      age: 4.603,
      moons: [],
    },
    {
      name: "Venus",
      rSpeed: 6.52,
      oSpeed: 35.02,
      radius: 6051.8,
      color: "orange",
      age: 4.503,
      moons: [],
    },
  ];
  const divStyle = {
    color: "black",
    fontWeight: "bolder",
  };
  const ref = useRef();

  const AgeChart = () => {
    const data = [
      { name: obj[0].name, years: obj[0].age },
      { name: obj[1].name, years: obj[1].age },
      { name: obj[2].name, years: obj[2].age },
      { name: obj[3].name, years: obj[3].age },
      { name: obj[4].name, years: obj[4].age },
      { name: obj[5].name, years: obj[5].age },
      { name: obj[6].name, years: obj[6].age },
      { name: obj[7].name, years: obj[7].age },
      { name: obj[8].name, years: obj[8].age },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            type="number"
            domain={[4, 5]}
            label={{
              value: "billion years",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip itemStyle={divStyle} labelStyle={divStyle} />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="years" fill="black" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  const SizeChart = () => {
    // * array of arrays to achieve the representation
    const data = [
      [{ name: obj[0].name, value: obj[0].radius }],
      [{ name: obj[1].name, value: obj[1].radius }],
      [{ name: obj[2].name, value: obj[2].radius }],
      [{ name: obj[3].name, value: obj[3].radius }],
      [{ name: obj[4].name, value: obj[4].radius }],
      [{ name: obj[5].name, value: obj[5].radius }],
      [{ name: obj[6].name, value: obj[6].radius }],
      [{ name: obj[7].name, value: obj[7].radius }],
      [{ name: obj[8].name, value: obj[8].radius }],
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip itemStyle={divStyle} labelStyle={divStyle} />
          <Legend verticalAlign="top" height={36} />

          <Pie
            dataKey="value"
            data={data[6]}
            innerRadius={20}
            outerRadius={40}
            fill="#b7e4c7"
          />
          <Pie
            dataKey="value"
            data={data[2]}
            innerRadius={40}
            outerRadius={60}
            fill="#95d5b2"
          />
          <Pie
            dataKey="value"
            data={data[8]}
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Pie
            dataKey="value"
            data={data[0]}
            innerRadius={80}
            outerRadius={100}
            fill="#74c69d"
          />
          <Pie
            dataKey="value"
            data={data[3]}
            innerRadius={100}
            outerRadius={120}
            fill="#52b788"
          />
          <Pie
            dataKey="value"
            data={data[5]}
            innerRadius={120}
            outerRadius={140}
            fill="#40916c"
          />
          <Pie
            dataKey="value"
            data={data[4]}
            innerRadius={140}
            outerRadius={160}
            fill="#2d6a4f"
          />
          <Pie
            dataKey="value"
            data={data[1]}
            innerRadius={160}
            outerRadius={180}
            fill="#1b4332"
          />
          <Pie
            dataKey="value"
            data={data[7]}
            innerRadius={180}
            outerRadius={200}
            fill="#081c15"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };
  const OrbitalSpeedChart = () => {
    const data = [
      { name: obj[3].name, orbital_speed: obj[3].oSpeed, fill: "#ffba08" },
      { name: obj[5].name, orbital_speed: obj[5].oSpeed, fill: "#faa307" },
      { name: obj[4].name, orbital_speed: obj[4].oSpeed, fill: "#f48c06" },
      { name: obj[1].name, orbital_speed: obj[1].oSpeed, fill: "#e85d04" },
      { name: obj[2].name, orbital_speed: obj[2].oSpeed, fill: "#dc2f02" },
      { name: obj[0].name, orbital_speed: obj[0].oSpeed, fill: "#d00000" },
      { name: obj[8].name, orbital_speed: obj[8].oSpeed, fill: "#9d0208" },
      { name: obj[6].name, orbital_speed: obj[6].oSpeed, fill: "#6a040f" },
      { name: obj[7].name, orbital_speed: obj[7].oSpeed, fill: "#370617" },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={20}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="orbital_speed"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  };
  const RotationalSpeedChart = () => {
    const data = [
      { name: obj[8].name, rotational_speed: obj[8].rSpeed, fill: "#414833" },
      { name: obj[7].name, rotational_speed: obj[7].rSpeed, fill: "#656d4a" },
      { name: obj[3].name, rotational_speed: obj[3].rSpeed, fill: "#a4ac86" },
      { name: obj[6].name, rotational_speed: obj[6].rSpeed, fill: "#c2c5aa" },
      { name: obj[2].name, rotational_speed: obj[2].rSpeed, fill: "#b6ad90" },
      { name: obj[0].name, rotational_speed: obj[0].rSpeed, fill: "#a68a64" },
      { name: obj[5].name, rotational_speed: obj[5].rSpeed, fill: "#936639" },
      { name: obj[4].name, rotational_speed: obj[4].rSpeed, fill: "#7f4f24" },
      { name: obj[1].name, rotational_speed: obj[1].rSpeed, fill: "#582f0e" },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={20}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="rotational_speed"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  };
  // * this charts contains fixed data.Database will be updated soon.
  const MassChart = () => {
    const data = [
      // { name: "Sun", kilos: 1989 * 10000000 },

      { name: "Jupiter", kilos: 1.9 * 10000, fill: "#1a759f" },
      { name: "Saturn", kilos: 5.68 * 1000, fill: "#168aad" },
      { name: "Neptune", kilos: 1.02 * 1000, fill: "#34a0a4" },
      { name: "Uranus", kilos: 8.68 * 100, fill: "#52b69a" },
      { name: "Earth", kilos: 5.97 * 10, fill: "#76c893" },
      { name: "Venus", kilos: 4.87 * 10, fill: "#99d98c" },
      { name: "Mars", kilos: 6.42, fill: "#b5e48c" },
      { name: "Mercury", kilos: 3.3, fill: "#d9ed92" },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart width={730} height={250}>
          <Tooltip />
          <Funnel dataKey="kilos" data={data} isAnimationActive>
            <LabelList
              position="right"
              fill="#000"
              stroke="none"
              dataKey="name"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    );
  };
  return (
    <>
      <Parallax pages={6} ref={ref} horizontal>
        <ParallaxLayer
          offset={0}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // background: "linear-gradient(to right,#ffba08, #faa307 100%)",
          }}
          onClick={() => ref.current.scrollTo(1)}
        >
          <h1>Let's explore some data</h1>
          <Canvas>
            <Text
              fontSize={1}
              maxWidth={10}
              lineHeight={1}
              letterSpacing={0.02}
              color={"black"}
            >
              Just click anywhere and the next chart will appear.
            </Text>
          </Canvas>
          <button
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            There is no spinning here take me home
          </button>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // background: "linear-gradient(to right,#ffba08, #faa307 100%)",
          }}
          onClick={() => ref.current.scrollTo(2)}
        >
          <h1>Age in billion years</h1>
          <AgeChart />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // background: "linear-gradient(to right,#f48c06, #e85d04 100%)",
          }}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1>Radius in km</h1>
          <SizeChart />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // background: "linear-gradient(to right,#e85d04, #dc2f02 100%)",
          }}
          onClick={() => ref.current.scrollTo(4)}
        >
          <h1>Rotational speed in km/h</h1>
          <RotationalSpeedChart />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => ref.current.scrollTo(5)}
        >
          <h1>Orbital speed in km/s</h1>

          <OrbitalSpeedChart />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Mass in kg * 10 ^ 23</h1>

          <MassChart />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Charts;
