import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,Treemap} from 'recharts';

const highLevel = [
  {
    name: 'Programming',
    start: 2009,
    occurances: 15,
    utilization: .45,
    type: 'technical',
  },
  {
    name: 'Quantitative Analytics',
    start: 2009,
    occurances: 435,
    utilization: .35,
    type: 'technical',
  },
  {
    name: 'Machine Learning',
    start: 2021,
    occurances: 5,
    utilization: .45,
    type: 'technical',
  },
  {
    name: 'Cloud Platforms',
    start: 2021,
    occurances: 4,
    utilization: .45,
    type: 'technical',
  },
  {
    name: 'Operation Systems',
    start: 2017,
    occurances: 15,
    utilization: .15,
    type: 'technical',
  },
  {
    name: 'Data Science',
    start: 2021,
    occurances: 15,
    utilization: .15,
    type: 'technical',
  },
  {
    name:'Project Management',
    start: 2009,
    occurances: 25,
    utilization: .10,
    type: 'management',
  },
  {
    name: 'Product Management',
    start: 2009,
    occurances: 415,
    utilization: .25,
    type: 'management',
  },
  {
    name: 'Team Management',
    start: 2012,
    occurances: 0,
    utilization: .15,
    type: 'management',
  },
  {
    name: 'Customer Service',
    start: 2009,
    occurances: 5,
    utilization: .05,
    type: 'business development',
  },
  {
    name: 'Business Development',
    start: 2009,
    occurances: 5,
    utilization: .05,
    type: 'business development',
  },
];

// load qualifications data from qualifications.json
const qualifications = require('./qualifications.json');

const specific = [
  {
    name:"programming",
    children: [
      {
        name: 'Python',
        size: 1600,
      },
      {
        name: 'Visiual Basic',
        size: 300,
      },
      {
        name: 'SQL',
        size: 150,
      },
      {
        name: 'JavaScript',
        size: 400,
      },
      {
        name: 'HTML',
        size: 600,
      },
      {
        name: 'CSS',
        size: 600,
      }
    ]
  },
  {
    name:"quantitative analytics",
    children: [
      {
        name: 'statistics',
        size: 500,
      },
      {
        name: 'data visualization',
        size: 500,
      },
      {
        name: 'data ETL',
        size: 500,
      },
      {
        name: 'pandas',
        size: 500,
      },
      {
        name: 'numpy',
        size: 100,
      },
    ]
  },
  {
    "name": "machine learning",
    "children": [
      {
        "name": "scikit-learn",
        "size": 250
      },
      {
        "name": "tensorflow",
        "size": 160
      },
      {
        "name": "pytorch",
        "size": 100
      },
    ]
  },
  {
    "name": "cloud platforms",
    "children": [
      {
        "name": "AWS",
        "size": 300
      },
      {
        "name": "GCP",
        "size": 150
      },
      {
        "name": "Azure",
        "size": 10
      },
      {
        "name": "Docker",
        "size": 100
      }
    ]
  },
  {
    "name": "operation systems",
    "children": [
      {
        "name": "Linux",
        "size": 300
      },
      {
        "name": "Windows",
        "size": 150
      }
    ]
  },
  {
    "name": "web development",
    "children": [
      {
        "name": "React",
        "size": 100
      },
      {
        "name": "Django",
        "size": 50
      },
      {
        "name": "Flask",
        "size": 160
      },
      {
        "name": "Next.js",
        "size": 100
      },
    ]
  },
  {
    "name": "management",
    "children": [
      {
        "name": "project management",
        "size": 1600
      },
      {
        "name": "product management",
        "size": 1600
      },
      {
        "name": "team management",
        "size": 800
      },
    ]
  },
  {
    "name": "business development",
    "children": [
      {
        "name": "customer service",
        "size": 900
      },
      {
        "name": "business development",
        "size": 100
      },
    ]
  }
]

const tendency = [
  {
    name:'explore',
    rate: 0.7,
  },
  {
    name:'project',
    rate: 0.4,
  },
  {
    name:'exploit',
    rate: 0.3,
  },
  {
    name:'condense',
    rate: 0.6,
  },
]

const CustomBarChart = () => (
  <BarChart
      width={500}
      height={750}
      data={highLevel}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
      layout="vertical"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis dataKey="name" />
      <XAxis xAxisId="top" orientation="top" stroke="#8884d8" />
      {/* <XAxis xAxisId="down" orientation="down" stroke="#82ca9d" /> */}
      <Tooltip />
      {/* <Legend />
      <Bar xAxisId="top" dataKey="occurances" fill="#8884d8" />
      <Bar xAxisId="down" dataKey="utilization" fill="#82ca9d" /> */}
    </BarChart>
);

const tendencyRadar = () => (
<RadarChart outerRadius={90} width={730} height={250} data={tendency}>
  <PolarGrid />
  <PolarAngleAxis dataKey="name" />
  <PolarRadiusAxis angle={30} />
  <Radar name="Roland" dataKey="rate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Legend />
</RadarChart>
)

// const specificAspects = () => (
//   <Treemap
//   width={730}
//   height={250}
//   data={qualifications}
//   dataKey="name"
//   aspectRatio={4 / 3}
//   stroke="#fff"
//   fill="#8884d8"
// />
// )

export {CustomBarChart, tendencyRadar};
// module.exports = {CustomBarChart, tendencyRadar,specificAspects};
