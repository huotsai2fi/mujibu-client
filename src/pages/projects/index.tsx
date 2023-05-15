import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@/components/block/card';

const Projects = () => {
  const isPC = useMediaQuery('(min-width:768px)'); //tailwind breakpoint md

  return (
    <>
      <h1>1.0 探索 yo</h1>
      <Card
        isPC={isPC}
        projectType="inProgress"
        projectName="Balance衡壓坐墊｜市場唯一衡壓概念健康坐墊，坐出 Q 軟好體態！"
      />
    </>
  );
};

export default Projects;
