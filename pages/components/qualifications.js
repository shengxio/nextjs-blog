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

const specific = [
  {
    name: 'Python',
    year: 2017,
    type:'language',
    proficiency: 1.0,
  },
  {
    name: 'R',
    year: 2021,
    type:'language',
    proficiency: 0.3,
  },
  {
    name: 'SQL',
    year: 2019,
    type:'language',
    proficiency: 0.5,
  },
  {
    name: 'JavaScript',
    year: 2019,
    type:'language',
    proficiency: 0.8,
  },
  {
    name: 'HTML',
    year: 2009,
    type:'language',
    proficiency: 0.8,
  },
  {
    name: 'CSS',
    year: 2009,
    type:'language',
    proficiency: 0.8,
  },
  {
    name: 'React',
    year: 2019,
    type:'framework',
    proficiency: 0.6,
  },
  {
    name: 'Django',
    year: 2021,
    type:'framework',
    proficiency: 0.3,
  },
  {
    name: 'Flask',
    year: 2021,
    type:'framework',
    proficiency: 0.5,
  },
  {
    name: 'tensorflow',
    year: 2021,
    type:'framework',
    proficiency: 0.7,
  },
  {
    name: 'scikit-learn',
    year: 2020,
    type:'framework',
    proficiency: 0.7,
  },
  {
    name: 'pandas',
    year: 2020,
    type:'framework',
    proficiency: 0.7,
  },
  {
    name: 'numpy',
    year: 2020,
    type:'framework',
    proficiency: 0.7,
  },
  {
    name: 'AWS',
    year: 2021,
    type:'platform',
    proficiency: 0.8,
  },
  {
    name: 'GCP',
    year: 2021,
    type:'platform',
    proficiency: 0.5,
  },
  {
    name: 'Azure',
    year: 2021,
    type:'platform',
    proficiency: 0.2,
  },
  {
    name: 'Linux',
    year: 2017,
    type:'OS',
    proficiency: 0.6,
  },
  {
    name: 'Windows',
    year: 2017,
    type:'OS',
    proficiency: 0.5,
  },
  {
    name: 'pytorch',
    year: 2023,
    type:'framework',
    proficiency: 0.3,
  },
  {
    name: 'next.js',
    year: 2023,
    type:'framework',
    proficiency: 0.3,
  },
  {
    name: 'Docker',
    year: 2021,
    type:'platform',
    proficiency: 0.2,
  },
  {
    name: 'statistics',
    year: 2015,
    type:'method',
    proficiency: 0.8,
  },
  {
    name: 'data visualization',
    year: 2015,
    type:'method',
    proficiency: 0.8,
  },
  {
    name: 'data ETL',
    year: 2015,
    type:'method',
    proficiency: 0.8,
  },
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

const specificAspects = () => (
  <Treemap
  width={730}
  height={250}
  data={specific}
  dataKey="name"
  dataValue="proficiency"
  aspectRatio={4 / 3}
  stroke="#fff"
  fill="#8884d8"
/>
)

// export default {CustomBarChart, tendencyRadar};
module.exports = {CustomBarChart, tendencyRadar,specificAspects};
