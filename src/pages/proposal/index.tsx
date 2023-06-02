import ProposalCard from '@/components/block/proposalCard';
import useBreakpoints from '@/libraries/hooks/useBreakPoints';
import { Bolt } from '@mui/icons-material';
import { Button, Typography, styled } from '@mui/material';
import { ProposalCardSize } from '@/components/types/enum';

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
      <section className="py-10 md:py-[60px] max-w-[352px] md:max-w-[1296px] m-auto px-3 md:px-6 2xl:px-0">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="basis-1/2">
            <ProposalCard
              imgUrl={isMd ? '/proposal/Desktop_Proposal_case1.png' : '/proposal/Mobile__Proposal_case1.png'}
              cardSize={isMd ? ProposalCardSize.Large : ProposalCardSize.Small}
            />
          </div>
          <div className="basis-1/2 flex flex-col gap-6">
            <ProposalCard
              imgUrl={isMd ? '/proposal/Desktop_Proposal_case2.png' : '/proposal/Mobile__Proposal_case2.png'}
              cardSize={isMd ? ProposalCardSize.Medium : ProposalCardSize.Small}
            />
            <ProposalCard
              imgUrl={isMd ? '/proposal/Desktop_Proposal_case3.png' : '/proposal/Mobile__Proposal_case3.png'}
              cardSize={isMd ? ProposalCardSize.Medium : ProposalCardSize.Small}
            />
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Proposal;
