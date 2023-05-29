import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import clsxm from '@/libraries/utils/clsxm';
import { ProposalCardImageSize } from '@/components/types/enum';

interface IProposalCardProps {
  isPC: boolean;
  imgSize: ProposalCardImageSize;
  // imgUrl: string;
}

const ProposalCard: React.FC<IProposalCardProps> = ({ isPC, imgSize, ...props }) => {
  // console.log(imgUrl);
  return (
    <Card
      className={clsxm(
        imgSize === ProposalCardImageSize.Large ? 'h-[848px]' : 'h-[412px]',
        'w-[351px] md:w-[636px]',
        'rounded-lg',
        // `bg-[url('${imgUrl}')] bg-center bg-cover`,
      )}
    >
      {/* <CardMedia
        className="object-cover"
        component="img"
        alt="proposal card img"
        height="276"
        image="/slides/Mobile_slides_3@2x.png"
      /> */}
      <CardContent></CardContent>
    </Card>
  );
};

export default ProposalCard;
