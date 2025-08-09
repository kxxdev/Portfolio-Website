import React from 'react';
import { SkillBlock as SkillBlockType } from '../../types';
import './Skills.css';

interface SkillsProps {
  skillBlocks: SkillBlockType[];
}

const SkillBlock: React.FC<{ skillBlock: SkillBlockType }> = ({
  skillBlock,
}) => (
  <div className='skill-block'>
    <div className='skill-block__name'>{skillBlock.name}</div>
    <ul className='skill-block__list'>
      {skillBlock.skills.map((skill, index) => (
        <li key={index} className='skill-block__skill'>
          {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const Illustrations: React.FC = () => {
  const DotsPattern1: React.FC = () => (
    <svg width='100%' className='dots' viewBox='0 0 80 80'>
      {Array.from({ length: 16 }, (_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const cx = 4 + col * 24;
        const cy = 4 + row * 24;
        return <circle key={i} cx={cx} cy={cy} r='4' />;
      })}
    </svg>
  );

  const DotsPattern2: React.FC = () => (
    <svg width='100%' className='dots' viewBox='0 0 128 128'>
      {Array.from({ length: 36 }, (_, i) => {
        const row = Math.floor(i / 6);
        const col = i % 6;
        const cx = 4 + col * 24;
        const cy = 4 + row * 24;
        return <circle key={i} cx={cx} cy={cy} r='4' />;
      })}
    </svg>
  );

  return (
    <div className='illustrations'>
      <img
        src='./images/logo-outline.svg'
        alt='8ug8ear logo'
        className='illustrations__logo'
      />
      <DotsPattern1 />
      <DotsPattern2 />
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skillBlocks }) => {
  return (
    <section className='skills' id='skills'>
      <h2 className='h2'>skills</h2>
      <div className='skills__content'>
        <Illustrations />
        <div className='skills__list'>
          {skillBlocks.map((skillBlock, index) => (
            <SkillBlock key={index} skillBlock={skillBlock} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
