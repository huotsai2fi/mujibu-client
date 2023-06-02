import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import clsxm from '@/libraries/utils/clsxm';
import { ProposalCardSize } from '@/components/types/enum';

interface IProposalCardProps {
  cardSize: ProposalCardSize;
  imgUrl: string;
}

const ProposalCard: React.FC<IProposalCardProps> = ({ cardSize, imgUrl, ...props }) => {
  const composedUrl = "url('" + imgUrl + "')";

  return (
    <Card
      className={clsxm(
        cardSize === ProposalCardSize.Small && 'h-[351px]',
        cardSize === ProposalCardSize.Medium && 'h-[412px]',
        cardSize === ProposalCardSize.Large && 'h-[848px]',
        'rounded-lg',
        `bg-[${composedUrl}] bg-top md:bg-center bg-cover`,
      )}
    >
      <CardContent></CardContent>
    </Card>
  );
};

export default ProposalCard;
