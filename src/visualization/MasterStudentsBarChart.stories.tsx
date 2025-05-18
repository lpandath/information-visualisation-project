import type { Meta, StoryObj } from '@storybook/react';
import { MasterStudentsBarChart } from './MasterStudentsBarChart';
import { architecture } from '../data/master-students';
import { civil_engineering } from '../data/master-students';
import { computer_science_biomedical_engineering } from '../data/master-students';
import { electrical_engineering_information_technology } from '../data/master-students';
import { mathematics_physics_geodesy } from '../data/master-students';
import { mechanical_engineering_business_administration } from '../data/master-students';
import { technical_chemistry_process_engineering_biotechnology } from '../data/master-students';

const faculty_architecture: [string, number][] = architecture.map(item => [
  item.type,
  item.students,
]);

const faculty_civil_engineering: [string, number][] = civil_engineering.map(item => [
    item.type,
    item.students,
]);

const faculty_computer_science_biomedical_engineering: [string, number][] = computer_science_biomedical_engineering.map(item => [
item.type,
item.students,
]);

const faculty_electrical_engineering_information_technology: [string, number][] = electrical_engineering_information_technology.map(item => [
item.type,
item.students,
]);

const faculty_mathematics_physics_geodesy: [string, number][] = mathematics_physics_geodesy.map(item => [
item.type,
item.students,
]);

const faculty_mechanical_engineering_business_administration: [string, number][] = mechanical_engineering_business_administration.map(item => [
item.type,
item.students,
]);

const faculty_technical_chemistry_process_engineering_biotechnology: [string, number][] = technical_chemistry_process_engineering_biotechnology.map(item => [
item.type,
item.students,
]);


const meta = {
  title: 'Visualization/MasterStudentsBarChart',
  component: MasterStudentsBarChart,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        margin: '1em',
        height: '400px',
        width: '100%',
        border: '1px solid #eee'
      }}>
        <Story />
      </div>
    )
  ],
} satisfies Meta<typeof MasterStudentsBarChart>;

export default meta;
type Story = StoryObj<typeof MasterStudentsBarChart>;


export const Default: Story = {
    args: {
        bars: [
            {
            name: "Architecture",
            color: '--faculty-architecture',
            data: faculty_architecture,
            },
            {
                name: "Civil Engineering",
                color: '--faculty-civil-engineering',
                data: faculty_civil_engineering
            }
            ,
            {
                name: "Computer Science and Biomedical Engineering",
                color: '--faculty-computer-science',
                data: faculty_computer_science_biomedical_engineering
            },
            {
                name: "Electrical Engineering and Information Technology",
                color: '--faculty-electrical-engineering',
                data: faculty_electrical_engineering_information_technology
            },
            {
                name: "Mathematics, Physics, Geodesy",
                color: '--faculty-mathematics',
                data: faculty_mathematics_physics_geodesy
            },
            {
                name: "Mechanical Engineering and Business Administration",
                color: '--faculty-mechanical-engineering',
                data: faculty_mechanical_engineering_business_administration
            },
            {
                name: "Technical Chemistry, Process Engineering and Biotechnology",
                color: '--faculty-technical-chemistry',
                data: faculty_mechanical_engineering_business_administration
            }
        ],
        title: "TU Graz Master Students",
        yAxisTitle: "Number of Students",
        xAxisTitle: "Category",
    }
};  