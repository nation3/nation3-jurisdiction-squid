import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import { EvmBatchProcessor, LogHandlerContext } from '@subsquid/evm-processor'
import { PositionStatus, AgreementStatus, Dispute, Settlement, AgremeentInfo, AgreementPosition, Agreement, ResolutionStatus } from './model';
import { events } from './abi/agreement-framework';

const agreementFrameworkContractAddress = "0x2E41383506A6715da7dd0985dC401fe720e473c0".toLowerCase();

const processor = new EvmBatchProcessor()
  .setDataSource({
    chain: process.env.RPC_ENDPOINT,
    archive: "https://eth.archive.subsquid.io",
  })
  .setBlockRange({ from: 16586489 })
  .addLog(agreementFrameworkContractAddress, {
    filter: [
      [
        events.AgreementCreated.topic,
        events.AgreementJoined.topic,
        events.AgreementPositionUpdated.topic,
        events.AgreementFinalized.topic,
        events.AgreementDisputed.topic,
      ],
    ],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      }
    }
  });

type AgreementData = {
  id: string;
  termsHash: string;
  metadataURI: string;
}

processor.run(new TypeormDatabase(), async (ctx) => {
  const agreementDataArr: AgreementData[] = [];
  for (let c of ctx.blocks) {
    for (let i of c.items) {
      if (i.address === agreementFrameworkContractAddress && i.kind === "evmLog") {
        if (i.evmLog.topics[0] === events.AgreementCreated.topic) {
          // what to do with the item now?!
        }
      }
    }
  }

  // upsert batches of entities with batch-optimized ctx.store.save
  await ctx.store.save(agreementDataArr)
});

function handleAgreementCreated(ctx: LogHandlerContext<Store, { evmLog: { topics: true; data: true }; transaction: { hash: true } }
>): AgreementData {
  const { evmLog, block, transaction } = ctx;

  const agreementData: AgreementData = {
    id: `${transaction.hash}-${evmLog.address}-${evmLog.index
      }`,
    termsHash: transaction.hash,
    metadataURI: "",
  }
  return agreementData;
}
