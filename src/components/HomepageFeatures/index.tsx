import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易用',
    Svg: require('@site/static/img/easy-use.svg').default,
    description: (
      <>
        catchadmin 是从头开始设计的模块化框架，解耦化的设计让你轻松驾驭框架
      </>
    ),
  },
  {
    title: '专注',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        catchadmin 加入大量快速开发组件，让你专注于后台管理的开发，而无需重复无意义的工作
      </>
    ),
  },
  {
    title: '强大',
    Svg: require('@site/static/img/powerful.svg').default,
    description: (
      <>
        catchadmin 基于 <code>PHP</code> 庞大的生态，使其稳定并且强大。使用 catchadmin 可以开发任意 web 应用
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
