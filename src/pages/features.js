import React from 'react';
import Layout from '@theme/Layout';
import Feature from '@site/src/components/Feature';

export default function Hello() {
  return (
    <Layout title="意见反馈" description="这里是 catchadmin 意见反馈页面">
        <div style={{ padding: '2rem'}}>
            <Feature/>
        </div>  
    </Layout>
  );
}