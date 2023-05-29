import ProposalCard from '@/components/block/proposal-card';
import useBreakpoints from '@/libraries/hooks/useBreakPoints';
import { Bolt } from '@mui/icons-material';
import { Button, Typography, styled } from '@mui/material';
import { ProposalCardImageSize } from '@/components/types/enum';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '16px 32px 16px 32px',
}));

const Proposal = () => {
  const { isMd } = useBreakpoints();

  return (
    <main>
      <section className="bg-[url('/proposal/Desktop_Proposal_kv.png')] bg-center bg-cover md:h-[600px] h-[560px]">
        <div className="h-full flex flex-col justify-center items-center gap-10">
          <Typography
            className="text-white [text-shadow:0_2px_20px_rgba(255,255,255,0.3),0_0px_4px_rgba(255,255,255,0.3)]"
            component={isMd ? 'h1' : 'h4'}
            variant={isMd ? 'h1' : 'h4'}
          >
            募質部，開啟我們的質感生活
          </Typography>
          <StyledButton variant="contained" size="large" startIcon={<Bolt />}>
            <Typography component="h5" variant="h5">
              開始提案
            </Typography>
          </StyledButton>
        </div>
      </section>
      <section className="py-10 md:py-[60px]">
        <div className="flex justify-center gap-6">
          <ProposalCard
            isPC={isMd}
            // imgUrl={'/proposal/Desktop_Proposal_case1.png'}
            imgSize={ProposalCardImageSize.Large}
          />
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Proposal;
